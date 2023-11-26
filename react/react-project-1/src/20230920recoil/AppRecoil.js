import React, { useState } from 'react'
import { useSetRecoilState,useRecoilValue,useRecoilState } from 'recoil';
import { count } from './store'

export default function AppRecoil() {
  const state = useRecoilValue(count);

  return (
    <div>
      {state}
      <AppRecoil2 />
    </div>
  );
}
function AppRecoil2() {
  return <AppRecoil3 />
}
function AppRecoil3() {
  return <AppRecoil4 />
}
function AppRecoil4() {

  const setState = useSetRecoilState(count)
  return (
    <>
      <button onClick={() => setState((prevState) => prevState + 1)}>증가</button>
    </>
  )


}