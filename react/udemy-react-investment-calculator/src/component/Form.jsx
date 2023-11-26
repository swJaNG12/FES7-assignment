import React, { useState } from 'react';
import styled from 'styled-components';

const Form = ({ calculateHandler, reset }) => {
  const [userInput, setUserInput] = useState({
    currentSavings: '',
    yearlyContribution: '',
    expectedReturn: '',
    duration: '',
  });
  const userInputHandler = (e) => {
    // const copyData = { ...userInput };
    // if (e.target.id === 'current-savings') {
    //   setUserInput({
    //     ...copyData,
    //     currentSavings: e.target.value,
    //   });
    // } else if (e.target.id === 'yearly-contribution') {
    //   setUserInput({
    //     ...copyData,
    //     yearlyContribution: e.target.value,
    //   });
    // } else if (e.target.id === 'duration') {
    //   setUserInput({
    //     ...copyData,
    //     duration: e.target.value,
    //   });
    // } else if (e.target.id === 'expected-return') {
    //   setUserInput({
    //     ...copyData,
    //     expectedReturn: e.target.value,
    //   });
    // }
    const { id, value } = e.target;
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [id]: parseInt(value),
    }));
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    calculateHandler(userInput);
    setUserInput({
      currentSavings: '',
      yearlyContribution: '',
      expectedReturn: '',
      duration: '',
    });
  };

  const onClickReset = () => {
    reset();
  };
  return (
    <>
      <form className="form" onSubmit={onSubmitHandler}>
        <div className="input-group">
          <p>
            <label htmlFor="currentSavings">현재 저축액 ($)</label>
            <input
              type="number"
              id="currentSavings"
              onChange={userInputHandler}
              value={userInput.currentSavings}
            />
          </p>
          <p>
            <label htmlFor="yearlyContribution">매년 추가 저축액 ($)</label>
            <input
              type="number"
              id="yearlyContribution"
              onChange={userInputHandler}
              value={userInput.yearlyContribution}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expectedReturn">예상 이자율 (연간 %)</label>
            <input
              type="number"
              id="expectedReturn"
              onChange={userInputHandler}
              value={userInput.expectedReturn}
            />
          </p>
          <p>
            <label htmlFor="duration">투자 기간 (년)</label>
            <input
              type="number"
              id="duration"
              onChange={userInputHandler}
              value={userInput.duration}
            />
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt" onClick={onClickReset}>
            초기화
          </button>
          <button type="submit" className="button">
            계산
          </button>
        </p>
      </form>
    </>
  );
};

export default Form;
