import React, { useState } from 'react';
import styled from 'styled-components';

const Form = () => {
  const [currentSavings, setCurrentSavings] = useState('');
  const [yearlyContribution, setYearlyContribution] = useState('');
  const [expectedReturn, setExpectedReturn] = useState('');
  const [duration, setDuration] = useState('');

  const currntSavingHandler = (e) => {
    setCurrentSavings(e.target.value);
  };
  const yearlyContributionHandler = (e) => {
    setYearlyContribution(e.target.value);
  };
  const expectedReturnHandler = (e) => {
    setExpectedReturn(e.target.value);
  };
  const durationHandler = (e) => {
    setDuration(e.target.value);
  };
  return (
    <>
      <form className="form">
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">현재 저축액 ($)</label>
            <input
              type="number"
              id="current-savings"
              onChange={currntSavingHandler}
              value={currentSavings}
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">매년 추가 저축액 ($)</label>
            <input
              type="number"
              id="yearly-contribution"
              onChange={yearlyContributionHandler}
              value={yearlyContribution}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">예상 이자율 (연간 %)</label>
            <input
              type="number"
              id="expected-return"
              onChange={expectedReturnHandler}
              value={expectedReturn}
            />
          </p>
          <p>
            <label htmlFor="duration">투자 기간 (년)</label>
            <input
              type="number"
              id="duration"
              onChange={durationHandler}
              value={duration}
            />
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt">
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
