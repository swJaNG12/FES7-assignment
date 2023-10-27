import logo from './assets/investment-calculator-logo.png';

function App() {
  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...
    // 폼이 제출될 때 트리거되어야 합니다.
    // 그러나 직접적으로 폼의 제출 이벤트에 바인딩하길 원하지 않을 수 있습니다...

    const yearlyData = []; // per-year results, 연도별 결과

    let currentSavings = +userInput['current-savings']; // 입력 객체의 형태를 변경하셔도 됩니다!
    const yearlyContribution = +userInput['yearly-contribution']; // 언급했듯이 입력 객체의 형태를 변경하셔도 됩니다...
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    // The below code calculates yearly results (total savings, interest etc)
    // 아래 코드는 연간 결과 (총 저축액, 이자 등)를 계산합니다.
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // 배열에 푸시되는 데이터의 형태를 변경하셔도 됩니다!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    // do something with yearlyData ...
    // yearlyData와 무언가를 수행...
  };

  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

      <form className="form">
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">현재 저축액 ($)</label>
            <input type="number" id="current-savings" />
          </p>
          <p>
            <label htmlFor="yearly-contribution">매년 추가 저축액 ($)</label>
            <input type="number" id="yearly-contribution" />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">예상 이자율 (연간 %)</label>
            <input type="number" id="expected-return" />
          </p>
          <p>
            <label htmlFor="duration">투자 기간 (년)</label>
            <input type="number" id="duration" />
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
      {/* 아래 테이블은 결과 데이터가 이용 가능한 경우에만 표시합니다. */}
      {/* 데이터가 없는 경우 대체 텍스트를 표시합니다. */}

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
    </div>
  );
}

export default App;
