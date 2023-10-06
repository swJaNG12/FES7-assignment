import { useState } from "react";

const LoginPage = ({ handleIsLogin}) => {


  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const login = async (email, password) => {
    const baseUrl = 'https://api.mandarin.weniv.co.kr/';
    const reqUrl = baseUrl + 'user/login';

    const loginData = {
      'user' : {
        email,
        password
      }
    }

    try {
      const res = await fetch(reqUrl, {
        method: 'POST',
        headers: {
          "Content-type" : "application/json"
        },
        body: JSON.stringify(loginData)
      });
      
      const json = await res.json();
      if(!json.user) {
        throw Error(json.message)
      }
      console.log(json)

      const token = json.user.token;
      localStorage.setItem('token', token)
      console.log(token)
      handleIsLogin();
    } catch (error) {
      alert(error)
      console.error(error)
    }

  }

  const handleInputEmail = (e) => {
    setInputEmail(e.target.value);
  };

  const handleInputPassword = (e) => {
    setInputPassword(e.target.value);
  };

  const submitLogin = (e) => {
    e.preventDefault();
    login(inputEmail, inputPassword)
  }

  return (
    <>
      <h1>로그인</h1>
      <section>
        <h2>이메일 비밀번호 입력하는 곳</h2>
        <form onSubmit={submitLogin}>
          <input type='text' placeholder="이메일 입력" value={inputEmail} onChange={handleInputEmail}/>
          <input type='text' placeholder="비밀번호 입력" value={inputPassword} onChange={handleInputPassword}/>
          <button>로그인</button>
        </form>
      </section>
    </>
  );
}
export default LoginPage;