import Button from '../component/Button';
import Header from '../component/Header';
import { useState } from 'react';

const Home = () => {
  
  const [pivotDate, setPivotDate] = useState(new Date());

  // 월 증가 함수
  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  }
  // 월 감소 함수
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1))
  }

  const headerTItle = `${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`

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