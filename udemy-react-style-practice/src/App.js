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
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...
    // 폼이 제출될 때 트리거되어야 합니다.
    // 그러나 직접적으로 폼의 제출 이벤트에 바인딩하길 원하지 않을 수 있습니다...
    const calculatedData = []; // per-year results, 연도별 결과
    // The below code calculates yearly results (total savings, interest etc)
    // 아래 코드는 연간 결과 (총 저축액, 이자 등)를 계산합니다.
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

  return (
    <StyledApp>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

      <Form calculateHandler={calculateHandler} />
      {/* 아래 테이블은 결과 데이터가 이용 가능한 경우에만 표시합니다. */}
      {/* 데이터가 없는 경우 대체 텍스트를 표시합니다. */}
      <Table />
    </StyledApp>
  );
};

export default App;
