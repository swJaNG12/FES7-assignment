import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import { useReducer, useRef } from 'react';

const reducer = (state, action) => {
  switch(action.type) {
    case 'CREATE': 
      return [...state, action.data];
    case 'UPDATE':
      return state.map(el => {
        return el.id === action.data.id ? action.data : el;
      })
    case 'DELETE':
      return state.filter(el => el.id !== action.targetId);
    default:
      return state;
  }
};


function App() {
  //  data: 일기 state
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  const onCreate = (date, content, emotionId) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef,
        date: new Date(date).getTime(),
        content,
        emotionId
      }
    });
    idRef.current += 1;
  }

  const onUpdate = (targetId, date, content, emotionId) => {
    dispatch({
      type: 'UPDATE',
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotionId
      }
    })
  }

  const onDelete = (targetId) => {
    dispatch({
      type: 'DELETE',
      targetId
    })
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/New' element={<New />} />
        <Route path='/Diary/:id' element={<Diary />} />
        <Route path='/Edit' element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
