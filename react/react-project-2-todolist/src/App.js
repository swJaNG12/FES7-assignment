import React, { useCallback, useReducer, useRef, useMemo } from 'react';
import './App.css';
import Header from './component/Header';
// import TestComp from './component/TestComp';
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';


const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: '공부하기',
    createDate: new Date().getTime()
  },
  {
    id: 1,
    isDone: false,
    content: '빨래 널기',
    createDate: new Date().getTime()
  },
  {
    id: 2,
    isDone: false,
    content: '노래 연습하기',
    createDate: new Date().getTime()
  },
]

const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE':
      return [...state,action.newItem];
    case 'UPDATE':
      return state.map(el => {
        return el.id === action.targetId ? {...el, isDone: !el.isDone} : el;
      })
    case 'DELETE':
      return state.filter(el => {
        return el.id !== action.targetId;
      })
    default:
      return state;
  } 
}

export const TodoStateContext = React.createContext();
export const TodoDispatchContext = React.createContext();

function App() {
  const idRef = useRef(3);

  const [todo, dispatch] = useReducer(reducer, mockTodo);
  // const [todo, setTodo] = useState(mockTodo);

  const onCreate = (content) => {
    dispatch({
      type: 'CREATE',
      newItem: {
        id: idRef.current,
        content,
        isDone: false,
        createDate: new Date().getTime()
      }
    })
    idRef.current++;
  };
  const onUpdate = useCallback(targetId => {
    dispatch({
      type:'UPDATE',
      targetId
    })
  }, []);

  const onDelete = useCallback(targetId => {
    dispatch({
      type: 'DELETE',
      targetId
    })
  }, []);

  const memoizeDispatches = useMemo(() => {
    return { onCreate, onDelete, onUpdate }
  }, []);

  return (
    <div className="App">
      <Header />
      <TodoStateContext.Provider value={todo}>
        <TodoDispatchContext.Provider value={memoizeDispatches}>
          <TodoEditor />
          <TodoList />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
