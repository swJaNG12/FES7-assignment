import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { createData, readData, updateData  } from './api/api';
import './App.css';


function App() {
  const [todo, setTodo] = useState('');
  const [updateTodo, setUpdateTodo] = useState('');
  
  // 리엑트 쿼리
  // useQuery(식별자, api 통신코드)
  // 데이터 읽어오기
  const {data} = useQuery(["todolist"], readData);
  // console.log(data)

  const onUpDate = (id, updateTodo) => {
    // 값을 2개 이상 파라미터로 넘기면 객체 형태로 넘겨줘야함
    updateData({ id, updateTodo });
    // 위의 코드는 updateData({ id : id, updateTodo : updateTodo }); 하고 똑같음
  };

  // readData();
  return (
    <div className="App">
      <input onChange={e => setTodo({...todo, todo:e.target.value})} />
      <button onClick={() => createData(todo)}>추가하기</button>
      {data?.map((data, idx) => (
        <div key={idx}>
          <p>id: {data.id}</p>
          <p>todo : {data.todo}</p>
          <input onChange={e => setUpdateTodo( {...updateTodo, todo: e.target.value})} />
          <button onClick={() => onUpDate(data.id, updateTodo)}>수정하기</button>
        </div>
      ))}
    </div>
  );
}

export default App;
