import Button from "../component/common/Button/Button";
import Header from "../component/common/Header/Header";
import { useNavigate } from 'react-router-dom';
import Editor from "../component/common/Editor/Editor";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";

const New = () => {

  const navigate = useNavigate();
  const { onCreate } = useContext(DiaryDispatchContext);


  const goBack = () => {
    navigate(-1);
  };
  const onSubmit = (data) => {
    const { date, content, emotionId } = data;
    onCreate(date, content, emotionId);
    navigate('/', {replace: true});
  };

  return (
    <div>
      <Header 
        leftChild={<Button onClick={goBack} text={'뒤로 가기'}/>} 
        title={'새 일기 쓰기'} 
      />
      <Editor onSubmit={onSubmit} />      
    </div>
  );
}

export default New;