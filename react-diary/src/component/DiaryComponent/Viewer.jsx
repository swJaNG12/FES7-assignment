import { emotionList } from '../../util';
import './Viewer.css';

const Viewer = ({ content, emotionId }) => {
  const emotionItem = emotionList.find(el => el.id === emotionId);
  console.log(emotionItem);
  return(
    <div className='Viewer'>
      <section>
        <h4>오늘의 감정</h4>
        <div className={['emotion_img_wrapper', `emotion_img_wrapper${emotionId}`].join(' ')}>
          <img src={emotionItem.img} alt={emotionItem.name} />
          <p className='emotion_descript'>{emotionItem.name}</p>
        </div>
      </section>
      <section>
        <h4>오늘의 일기</h4>
        <div className='content_wrapper'>
          <p>{content}</p>
        </div>
      </section>
    </div>
  );
};


export default Viewer;