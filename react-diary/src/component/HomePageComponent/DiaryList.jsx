import { useState } from 'react';
import Button from '../common/Button/Button';
import './DiaryList.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import DiaryItem from './DiaryItem';

const sortOptionList = [
  { value: 'latest', name: '최신순' },
  { value: 'oldest', name: '오래된 순' }
];

const DiaryList = ({ data }) => {

  const [sortType, setSortType] = useState('latest');
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    const copyData = JSON.parse(JSON.stringify(data));
    if(sortType === 'latest') {
      // 최신순이면 타임스탬프 값이 큰것부터 정렬
      copyData.sort((a,b) =>  parseInt(b.date) - parseInt(a.date));
    } else {
      // 오래된 순이면 타임스탬프 값이 작은것부터 정렬
      copyData.sort((a,b) =>  parseInt(a.date) - parseInt(b.date));
    }
    setSortedData(copyData);
    console.log(copyData);
  }, [data, sortType])

  const onChangeSortTYpe = e => {
    setSortType(e.target.value);
  };

  // 새 일기 쓰기 버튼 기능
  const navigate = useNavigate();
  const onClickNew = () => {
    navigate('/New');
  };

  return(
    <div className='DiaryList'>
      <div className='menu_wrapper'>
        <div className='left_col'>
          <select value={sortType} onChange={onChangeSortTYpe}>
            {sortOptionList.map((el,idx) => {
              return <option key={idx} value={el.value}>{el.name}</option>
            })}
          </select>
        </div>
        <div className='right_col'>
          <Button text={'새 일기 쓰기'} type={'positive'} onClick={onClickNew} />
        </div>
      </div>

      <ul className='list_wrapper'>
        {sortedData.map((el, idx) => {
          return <DiaryItem key={el.id} {...el} />
        })}
      </ul>
    </div>
  );
}

export default DiaryList;