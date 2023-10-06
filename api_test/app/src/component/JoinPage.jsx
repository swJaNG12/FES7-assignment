import { useState } from "react";

const JoinPage = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accountname, setAccountname] = useState('');
  const [imgSrc, setImgSrc] = useState('https://api.mandarin.weniv.co.kr/Ellipse.png')

  const handleOnChangeUsername = e => {
    setUsername(e.target.value)
  }
  const handleOnChangeEmail = e => {
    setEmail(e.target.value)
  }
  const handleOnChangePassword = e => {
    setPassword(e.target.value)
  }
  const handleOnChangeAccountname = e => {
    setAccountname(e.target.value)
  }

  // email :  aaaa123@aaaa.aaa
  // pw    :  987987987
  // usename : hskhsk12
  // acountname : hskhsk12
  const join = async (joinData) => {
    console.log(joinData)
    const baseUrl = 'https://api.mandarin.weniv.co.kr/';
    const reqUrl = baseUrl + 'user';


    try {
      const res = await fetch(reqUrl, {
        method: 'POST',
        headers: {
          "Content-type" : "application/json"
        },
        body: JSON.stringify(joinData)
      })
      const json = await res.json();
      if(json.message !== '회원가입 성공') {
        throw new Error(json.message)
      }
      console.log(json)
    } catch (error) {
      alert(error)
      console.error(error)
    }


  }

  const submitJoin = () => {
    const joinData = {
      'user': {
        username,
        email,
        password,
        accountname,
        image: imgSrc
      }
    }
    join(joinData)
  }

  const imageUpload = async (image) => {
    const baseUrl = 'https://api.mandarin.weniv.co.kr/';
    const reqUrl = baseUrl + 'image/uploadfile';

    const formData = new FormData();
    formData.append('image', image)

    console.log(formData)
    const res = await fetch(reqUrl, {
      method: 'POST',
      body: formData
    });

    const json = await res.json();
    console.log(json)
    console.log(json.filename)
    const imgUrl = baseUrl + json.filename
    setImgSrc(imgUrl)
  }

  const handleOnChangeImgage = (e) => {
    console.log(e.target.files[0]);
    const image = e.target.files[0];
    imageUpload(image);
  }

  return(
    <>
      <section >
        <h2 >이메일로 회원가입</h2>
        <div >
          <label htmlFor="emailInput">이메일</label>
          <input 
          value={email}
          onChange={handleOnChangeEmail}
          type="email" 
          id="emailInput" 
          name="email" 
          placeholder="이메일 주소를 알려주세요."/>
        </div>
        <div>
          <label htmlFor="passwordInput">비밀번호</label>
          <input 
          value={password}
          onChange={handleOnChangePassword}
          type="password" 
          name="password" 
          id="passwordInput" 
          placeholder="비밀번호를 설정해 주세요."/>
        </div>
        <button type="button" >다음</button>
      </section>
      <section>
        <h2 >프로필 설정</h2>
        <p>나중에 언제든지 변경할 수 있습니다.</p>
        <label htmlFor="profileImg">
          <img 
          src={imgSrc} 
          alt="" 
          srcSet="" 
          id="imagePre"/>
        </label>
        <input 
        onChange={handleOnChangeImgage}
        type="file" 
        id="profileImg" 
        name="image" 
        accept="image/*" 
        className="ir" />
        <div >
          <label htmlFor="userNameInput">사용자 이름</label>
          <input 
          value={username}
          onChange={handleOnChangeUsername}
          type="text" 
          id="userNameInput" 
          name="username" 
          placeholder="2~10자 이내여야 합니다."/>
        </div>
        <div >
          <label htmlFor="userIdInput">계정 ID</label>
          <input 
          value={accountname}
          onChange={handleOnChangeAccountname}
          type="text" 
          id="userIdInput" 
          name="accountname" 
          placeholder="영문, 숫자, 특수문자(,), (_)만 사용 가능합니다."/>
        </div>
        <div>
          <label htmlFor="userIntroInput">소개</label>
          <input 
          type="text" 
          id="userIntroInput" 
          name="intro" 
          placeholder="자신과 판매할 상품에 대해 소개해 주세요."/>
        </div>
        <button type="button" onClick={submitJoin}>감귤마켓 시작하기</button>
      </section>
    </>
  )
}

export default JoinPage;