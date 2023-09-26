import './Modal.css';
import modalImg from '../../images/licat.png';

const Modal = () => {
  return (
    <article id='modal'>
      <div className='modal-wrap'>
        <h2>화이팅!! &#9829;&#9829;&#9829;</h2>
        <h3>당신의 꿈을 응원합니다!</h3>
        <img src={modalImg} alt="" />
        <button className='btn-close'>종료하고 진짜 훈련하러 가기 GO!GO!</button>
      </div>
    </article>
  );
}

export default Modal;