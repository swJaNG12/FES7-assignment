import { useParams } from 'react-router-dom';

const Edit = () => {
  const { id } =  useParams();
  return (
    <div>
      <div>{id}번 일기</div>
      <div>Edit 페이지입니다.</div>
    </div>
  );
}

export default Edit;