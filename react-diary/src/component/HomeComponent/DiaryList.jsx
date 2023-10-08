import { useState } from 'react';
import Button from '../common/Button/Button';
import './DiaryList.css';

const sortOptionList = [
  { value: 'latest', name: '최신순' },
  { value: 'oldest', name: '오래된 순' }
];

const DiaryList = ({ data }) => {

  const [sortType, setSortType] = useState('latest');
  const onChangeSortTYpe = e => {
    setSortType(e.target.value)
  }

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
          <Button text={'새 일기 쓰기'} type={'positive'} />
        </div>
      </div>
    </div>
  );
}

export default DiaryList;