// custom hook인 useInput 사용

import React, { useState } from 'react';
import useIntput from './Hooks/useInput';

function SomethingComponent() {
  // const [value, setValue] = useState('');
  // function onChange(e) {
  //   setValue(e.target.value);
  // }

  const [value, onChange] = useIntput('')

  return (
      <>
      <input type="text" onChange={onChange}/>
      <div>
        {value}
        가 강해졌다 돌격해!
      </div>
      </>
  )
}

export default SomethingComponent;