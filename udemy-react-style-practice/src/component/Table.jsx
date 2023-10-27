import React from 'react';

const Table = ({
  savingsEndOfYear,
  year,
  yearlyContribution,
  yearlyInterest,
}) => {
  return (
    <>
      <table className="result">
        <thead>
          <tr>
            <th>년도</th>
            <th>총 저축액</th>
            <th>연간 이자 (년)</th>
            <th>총 이자액</th>
            <th>투자한 자본</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{year}</td>
            <td>{savingsEndOfYear}</td>
            <td>{yearlyContribution}</td>
            <td>{yearlyInterest}</td>
            <td>총 투자한 자본액</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
export default Table;
