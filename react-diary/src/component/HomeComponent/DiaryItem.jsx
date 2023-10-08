import './DiaryItem.css';
import { useNavigate } from 'react-router-dom';
import { getEmotionImgById } from '../../util';
import Button from '../common/Button/Button';

const DiaryItem = ({ id, content, date, emotionId }) => {

  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/diary/${id}`);
  };
  const goEdit = () => {
    navigate(`/edit/${id}`)
  }

  return(
    <li className='DiaryItem'>
      <div onClick={goDetail} className={['img_section', `img_section${emotionId}`].join(' ')}>
        <img src={getEmotionImgById(emotionId)} alt={`emotion${emotionId}`} />
      </div>
      <div className='info_section' onClick={goDetail}>
        <div className='info_wrapper'>
          <div className='date_wrapper'>
            {new Date(date).toLocaleString()}
          </div>
          <div className='content_wrapper'>
            {content.slice(0,25)}
          </div>
        </div>
      </div>
      <div className='button_section'>
        <Button text={'수정하기'} onClick={goEdit} />
      </div>
    </li>
  );
}

export default DiaryItem;