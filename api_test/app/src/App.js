import JoinPage from "./component/JoinPage";
import LoginPage from "./component/LoginPage";
import Home from "./component/Hoem";
import MyInfo from "./component/MyInfo";
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import {  useEffect, useState } from "react";

function App() {

  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  const handleIsLogin = () => {
    setIsLogin(prevIsLogin => !prevIsLogin)
  }

  useEffect(() => {
    if(isLogin) {
      navigate('/MyInfo');
    }
  }, [isLogin])




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
        <Route path='/login' element={<LoginPage handleIsLogin={handleIsLogin} />} />
        <Route path='/MyInfo' element={<MyInfo />} />
      </Routes>

    </div>
  );
}
export default App;
