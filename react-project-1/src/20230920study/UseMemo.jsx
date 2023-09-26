import React from 'react'
import { useMemo } from 'react';
import { useRef } from 'react';
import { useState } from 'react'

export default function UseMemo() {

  const [userInfo, setUserInfo] = useState([]);
  const [name, setName] = useState('');
  const [id, setId] = useState('');

  const inputName = useRef(null);
  const inputId = useRef(null);

  function handleInputName(e){
    console.log(e)
    setName(e.target.value)
    console.log('렌더링 - 1')
  }

  function handleInputId(e){
    console.log(e)
    setId(e.target.value)
    console.log('렌더링 - 2')
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newInfo = [...userInfo, {name, id}];
    setUserInfo(newInfo);
    setName('');
    setId('');
    console.log('렌더링 - 3');
  }
  const getNum = (userInfo) => {
    console.log('렌러딩')
    return userInfo.length;
  }

  const n = useMemo(() => {
    return getNum(userInfo);
  }, [userInfo])



  return (
    <>
     <form onSubmit={handleSubmit}>
        <input 
          type='text'
          value={name}
          ref={inputName}
          onChange={handleInputName}
          />
        <input
          type='text'
          value={id}
          ref={inputId}
          onChange={handleInputId}
          />
        <button>회원 명부 작성</button>
        
      </form> 
      <ul>
        {
          userInfo.map((val, idx) => {
            return (
              <li key={idx}>
                <h3>이름 : {val.name}</h3>
                <strong>아이디 : {val.id}</strong>
             </li>
            )
          })
        }
      </ul>
      <span>현재 회원 수 : {n}</span>
    </>
  )
}

/**
 * useMemo와 useEffect의 차이
 * useMemo와 useEffect 모두 설정된 값의 변동에 따라 동작하는 것이라 
 * 어떤 점이 다른지 이해하기 어려울 것 같아 정리해보았습니다
 * useMemo 
 * useMemo(실행될 것, [값])
 * useMemo는 렌더링 전에 실행되어 메모이제이션한 겻을 반환해줍니다.
 * 값이 바뀌었는지 확인하고 렌더링 전에 저장된 것을 보내주는 것이죠
 * 
 * useEffect
 * 반면 useEffect는 렌더링 후에 일어납니다. 렌더링 후에 상태가 업데이트 되었을 때를 감지하여 동작합니다.
 * 
 * 차이점
 * useMemo는 렌더링에 직접적인 영향을 미칠 수 있습니다. 위의 예시처럼, 콜백함수에서 컴포넌트 등을 
 * 반환하게 했을 때, 렌더링하기 이전에 저장된 값을 확인하여 변화가 없다면 리렝더링을 하지 않도록 할 수 있기 때문이죠
 * 즉 useMemo는 리렌더링이나 불필요한 재실행 과정을 막는 방법(최적화)에 사용하기 적합하고,
 * useEffect는 상태를 이용한 관리에 사용됩니다
 * 
 * 렌더링 전 : useMemo, 렌더링 후 : useEffect
 * 상태 변화를 감지하여 경우에 따라 콜백함수를 호출하고 싶다면 useEffect
 * 값을 저장하여 불필요한 동작또는 렌더링을 막아 최적화하고 싶다면 useMemo
 */
