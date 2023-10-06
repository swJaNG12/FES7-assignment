import JoinPage from "./component/JoinPage";
import LoginPage from "./component/LoginPage";
import Home from "./component/Hoem";
import { Routes, Route, Link } from 'react-router-dom';

function App() {


  return (
    <div className="App">
      <div>
        <Link to='/'>Home페이지</Link>
        <Link to='/join'>join페이지</Link>
        <Link to='/login'>login페이지</Link>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/join' element={<JoinPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>

    </div>
  );
}
export default App;
