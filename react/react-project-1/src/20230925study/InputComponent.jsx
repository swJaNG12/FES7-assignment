// custom hook인 useInput 사용

import React, { useState } from 'react';
import useIntput from './Hooks/useInput';

function InputComponent() {
  // const [value, setValue] = useState('');
  // function onChange(e) {
  //   setValue(e.target.value);
  // }

  const [value, onChange] = useIntput('');

  return (
    <>
      <input type="text" onChange={onChange}/>
      <div>
        {value}
      </div>
    </>
  )
}

export default InputComponent;