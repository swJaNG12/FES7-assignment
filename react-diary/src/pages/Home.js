import Button from '../component/Button';
import Header from '../component/Header';
import { useState, useContext, useEffect } from 'react';
import { DiaryStateContext } from '../App';
import { getMonthRangeByDate } from '../util';

const Home = () => {
  const data = useContext(DiaryStateContext);

  const [pivotDate, setPivotDate] = useState(new Date());
  const [filteredData, setFilteredData] = useState([]);
  console.log(data)

  // 월 증가 함수
  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  }
  // 월 감소 함수
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  }

  useEffect(() => {
    const { beginTimeStamp, endTimeStamp } = getMonthRangeByDate(pivotDate);
    if(data.length >= 1) {
      setFilteredData(data.filter(el => {
        return el.date >= beginTimeStamp && el.date <=endTimeStamp;
      }));
    } else {
      setFilteredData([]);
    }


  }, [data, pivotDate]);


  const headerTItle = `${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`;

  return (
    <div>
      <Header 
        title={headerTItle}
        leftChild={<Button text={'<'} onClick={onDecreaseMonth}/>}
        rightChild={<Button text={'>'} onClick={onIncreaseMonth}/>}
      />
    </div>
  );
}

export default Home;