import './TodoList.css'
import TodoItem from './TodoItem';
import { useState } from 'react';
import { useMemo } from 'react';



const TodoList = ({ todo, onUpdate, onDelete }) => {
    console.log('TodoList 업데이트')


  const [search, setSearch] = useState('');
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  }
  const getSearchResult = () => {
    // return search === "" ? todo : todo.filter(el => el.content.includes(search));
    
    // 대소문자 구별하지 않고 검색하기 기능
    return search === '' ? todo : todo.filter(el => {
      return el.content.toLowerCase().includes(search.toLowerCase())
    })
  }

  const analyzeTodo = useMemo(() => {
    console.log('analyzeTodo 함수 호출');
    const totalCount = todo.length;
    const doneCount = todo.filter(el => el.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return {
      totalCount,
      doneCount,
      notDoneCount
    };
  }, [todo]);

  const {totalCount, doneCount, notDoneCount} = analyzeTodo;

  return (
    <div className="TodoList">
      <h4>Todo List 🌱</h4>
      <ul>
        <li>총개수: {totalCount}</li>
        <li>완료된 할 일: {doneCount}</li>
        <li>아직 완료하지 못한 할 일: {notDoneCount}</li>
      </ul>
      <input 
        className="searchbar" 
        placeholder="검색어를 입력하세요"
        onChange={onChangeSearch}
        value={search}
        />
      <div className='list-wrapper'>
        {getSearchResult().map(el => (
          <TodoItem key={el.id} onUpdate={onUpdate} onDelete={onDelete} {...el} />
        ))}
      </div>
    </div>
  );
}

export default TodoList;