import React, { useEffect, useState } from 'react';
import logo from './assets/investment-calculator-logo.png';
import styled from 'styled-components';
import Form from './component/Form';
import Table from './component/Table';

const StyledApp = styled.div`
  & label {
    font-size: 14px;
  }
`;

const App = () => {
  const [yearlyData, setYearlyData] = useState([]);

  const calculateHandler = (userInput) => {
    console.log(userInput);
    const calculatedData = []; // per-year results, 연도별 결과
    for (let i = 0; i < userInput.duration; i++) {
      const yearlyInterest =
        userInput.currentSavings * userInput.expectedReturn;
      userInput.currentSavings += yearlyInterest + userInput.yearlyContribution;
      calculatedData.push({
        // 배열에 푸시되는 데이터의 형태를 변경하셔도 됩니다!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: userInput.currentSavings,
        yearlyContribution: userInput.yearlyContribution,
      });
    }
    console.log(calculatedData);
    // do something with yearlyData ...
    // yearlyData와 무언가를 수행...
    setYearlyData(calculatedData);
  };

  useEffect(() => {
    console.log(yearlyData);
  }, [yearlyData]);

  const reset = () => {
    setYearlyData([]);
  };
  return (
    <StyledApp>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

      <Form calculateHandler={calculateHandler} reset={reset} />
      {/* 아래 테이블은 결과 데이터가 이용 가능한 경우에만 표시합니다. */}
      {/* 데이터가 없는 경우 대체 텍스트를 표시합니다. */}
      {yearlyData.length === 0
        ? null
        : yearlyData.map((el, idx) => {
            return <Table {...el} key={idx} />;
          })}
    </StyledApp>
  );
};

export default App;
