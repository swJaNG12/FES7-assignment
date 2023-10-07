import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import React, { useReducer, useRef, useEffect, useState } from 'react';

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

const mockData = [
  {
    id: 'mock1',
    date: new Date().getTime(),
    content: 'mock1',
    emotionId: 1
  },
  {
    id: 'mock2',
    date: new Date().getTime(),
    content: 'mock2',
    emotionId: 2
  },
  {
    id: 'mock3',
    date: new Date().getTime(),
    content: 'mock3',
    emotionId: 3
  },
];

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
    case 'INIT':
      return action.data
    default:
      return state;
  }
};


function App() {
  //  data: 일기 state
  const [data, dispatch] = useReducer(reducer, []);
  const [isDataLoaded, setIsDataLoaded]= useState(false);
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

  useEffect(() => {
    dispatch({
      type: 'INIT',
      data: mockData
    })
    setIsDataLoaded(true);
    console.log(isDataLoaded)
  }, []);


  if(!isDataLoaded) {
    return <div>데이터를 불러오는 중입니다.</div>
  } else {
    return (

      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{onCreate, onUpdate, onDelete}}>
          <div className="App">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/New' element={<New />} />
              <Route path='/Diary/:id' element={<Diary />} />
              <Route path='/Edit' element={<Edit />} />
            </Routes>
          </div>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    );
  }


}

export default App;
