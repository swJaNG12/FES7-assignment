import './Editor.css'
import { useState } from 'react'
import Button from './Button';
import { emotionList, getFormatteDate } from '../util';
import { useNavigate } from 'react-router-dom';
import EmotionItem from './EmotionItem';

const Editor = ({ initDate, onSubmit }) => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    date: getFormatteDate(new Date()),
    emotionId: 3,
    content: ''
  })
  const handleChangeDate = (e) => {
    setState({
      ...state,
      date: e.target.value
    });
  }
  const handleChangeContent = e => {
    setState({
      ...state,
      content: e.target.value,
    })
  }
  const handleSubmit = () => {
    onSubmit(state);
  }
  const handleOnGoBack = () => {
    navigate(-1);
  }

  const handleChangeEmotion = (emotionId) => {
    setState({
      ...state,
      emotionId
    })
    console.log(state)
  }

  return (
    <div className="Editor">
      <div className="editor_section ">
        <h4>오늘의 날짜</h4>
        <div className='input_wrapper'>
          <input type='date' onChange={handleChangeDate} value={state.date}/>
        </div>
      </div>
      <div className="editor_section ">
        <h4>오늘의 감정</h4>
        <div className='input_wrapper emotion_list_wrapper'>
          {emotionList.map(el => {
            return <EmotionItem key={el.id} {...el} onClick={handleChangeEmotion} isSelected={state.emotionId === el.id}/>
          })}
        </div>
      </div>
      <div className="editor_section ">
        <h4>오늘의 일기</h4>
        <div className='input_wrapper'>
          <textarea placeholder='오늘은 어땟나요?' onChange={handleChangeContent}  value={state.content}/>
        </div>
      </div>
      <div className="editor_section button_section">
        <Button text={'취소하기'} onClick={handleOnGoBack}/>
        <Button text={'작성완료'} type={'positive'} onClick={handleSubmit}/>
      </div>
    </div>
  );
}

export default Editor;