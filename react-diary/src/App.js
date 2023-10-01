import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Edit from './pages/Edit';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/New' element={<New />} />
        <Route path='/Diary/:id' element={<Diary />} />
        <Route path='/Edit' element={<Edit />} />
      </Routes>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/New'>New</Link>
        <Link to='/Diary'>Diary</Link>
        <Link to='/Edit'>Edit</Link>
      </div>
    </div>
  );
}

export default App;
