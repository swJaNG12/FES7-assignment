import { useParams, useNavigate } from 'react-router-dom';
import Button from '../component/common/Button/Button';
import Header from '../component/common/Header/Header';
import Viewer from '../component/DiaryComponent/Viewer';
import useDiary from '../hooks/useDiary';
import { getFormatteDate } from '../util';

const Diary = () => {
  const { id } = useParams();
  const data = useDiary(id);
  console.log(data);

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const goEdit = () => {
    navigate(`/edit/${id}`);
  };

  if(!data) {
    return <div>일기를 불러오는 중입니다.</div>
  } else {
    const { date, content, emotionId } = data;
    const title = `${getFormatteDate(new Date(date))} 기록`
    return (
      <div>
        <Header 
          title={title}
          leftChild={<Button text={'뒤로가기'} onClick={goBack} />}
          rightChild={<Button text={'수정하기'} onClick={goEdit} />}
        />
        <Viewer content={content} emotionId={emotionId} />
      </div>
    );
  }
  
}

export default Diary;