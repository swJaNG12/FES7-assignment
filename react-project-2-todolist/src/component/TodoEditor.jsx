import { useRef } from 'react';
import { useState } from 'react';
import './TodoEditor.css';

const TodoEditor = ({ onCreate }) => {
  const inputRef = useRef();
  const [content, setContent] = useState('');
  const onChangeContent = (e) => {
    setContent(e.target.value);
  }

  const onSubmit = () => {
    if(!content) {
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent('');
  }

  const onKeyDown = (e) => {
    if(e.keyCode === 13) {
      onSubmit();
    }
  }

  return (
    <div className="TodoEditor">
      <h4>새로운 Todo 작성하기 ✏️</h4>
      <div className='editor_wrapper'>
        <input 
          placeholder='새로운 Todo...'
          value={content}
          onChange={onChangeContent}
          onKeyDown={onKeyDown}
          ref={inputRef}
           />
        <button onClick={onSubmit}>추가</button>
      </div>
    </div>
  );
}

export default TodoEditor;