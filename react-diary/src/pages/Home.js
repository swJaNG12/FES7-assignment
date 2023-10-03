import { useSearchParams } from 'react-router-dom';
import Button from '../component/Button';
import Editor from '../component/Editor';
import Header from '../component/Header';

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams)
  console.log(searchParams.get('sort'))

  return (
    <div>
      <Editor 
      initData={{
        date: new Date().getTime(),
        emotionId: 1,
        content: '이전에 작성했던 일기'
      }}
      onSubmit={(state) => console.log('작성완료 버튼 클릭', state)} />
    </div>
  );
}

export default Home;