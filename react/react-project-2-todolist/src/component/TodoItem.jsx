import './TodoItem.css'
import React from 'react'
import { useContext } from 'react'
import { TodoDispatchContext } from '../App'

const TodoItem = ({ id, isDone, content, createDate}) => {

    const { onUpdate, onDelete } = useContext(TodoDispatchContext);

  console.log(id,'TodoItem 업데이트')
  const onChangeCheckbox = () => {
    onUpdate(id);
  }
  const onClickDelete = () => {
    onDelete(id)
  }
  return (
    <div className="TodoItem">
      <div className="checkbox_col">
        <input 
          checked={isDone} 
          type="checkbox" 
          onChange={onChangeCheckbox}
        />
      </div>
      <div className="title_col">{content}</div>
      <div className="date_col">{new Date(createDate).toLocaleDateString()}</div>
      <div className="btn_col">
        <button onClick={onClickDelete}>삭제</button>
      </div>
    </div>
  );
}

export default React.memo(TodoItem);