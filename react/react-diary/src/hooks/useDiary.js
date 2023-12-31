// import { useContext } from "react";
// import { DiaryStateContext } from "../App";
// import { useNavigate } from 'react-router-dom';

// const useDiary = (id) => {
//   const navigate = useNavigate()
//   const data = useContext(DiaryStateContext);
//   const matchDiary = data.find(el => el.id === id);
//   if(matchDiary) {
//     return matchDiary;
//   } else {
//     alert('일기가 존재하지 않습니다.');
//     navigate('/', {replace: true});
//     console.log('1');
//     return matchDiary;

//   }

// }

// export default useDiary;


import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { DiaryStateContext } from "../App";
import { useNavigate } from 'react-router-dom';

const useDiary = (id) => {
  const navigate = useNavigate();
  const data = useContext(DiaryStateContext);
  const [diary, setDiary] = useState();
  console.log(data)

  useEffect(() => {
    const matchDiary = data.find(el => String(el.id) === String(id));
    console.log(matchDiary)
    if(matchDiary) {
      setDiary(matchDiary);
    } else {
      console.log('실패')
      // alert('일기가 존재하지 않습니다.');
      // navigate('/', {replace:true});
    }
  }, [id, data]);

  return diary;
}

export default useDiary;