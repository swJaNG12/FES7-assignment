import Button from '../common/Button/Button';
import './DiaryList.css';

const DiaryList = ({ data }) => {
  return(
    <div className='DiaryList'>
      <div className='menu_wrapper'>
        <div className='left_col'>
          <select></select>
        </div>
        <div className='right_col'>
          <Button text={'새 일기 쓰기'} type={'positive'} />
        </div>
      </div>
    </div>
  );
}

export default DiaryList;