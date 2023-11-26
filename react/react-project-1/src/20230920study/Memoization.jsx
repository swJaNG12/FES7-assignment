import { useMemo, useState } from "react";

function over() {
  let s = 0;
  for(let i = 0; i< 1000000000; i++) {
    s += 1
  }
  return s
}

export default function Memoization() {
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const result = useMemo(() => {
    return over();
  }, [countTwo])

  // let result = over();

  const handleCountUp = () => {
    setCount(count + 1);
    console.log(count)
  }
  const handleCountUpTwo = () => {
    setCountTwo(countTwo + 1);
    console.log(countTwo)
  }

  console.log('렌더링')
  return (
    <div className="App">
      <h1>계산 결과 : {result}</h1>
      <div>{count}</div>
      <button onClick={handleCountUp}>up</button>
      <div>{countTwo}</div>
      <button onClick={handleCountUpTwo}>up</button>
    </div>
  );
}

