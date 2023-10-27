import React from 'react';

const Table = () => {
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
            <td>연도 번호</td>
            <td>연말 총 저축액</td>
            <td>해당 연도 이자액</td>
            <td>총 이자액</td>
            <td>총 투자한 자본액</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
export default Table;
