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
      <Editor onSubmit={(state) => console.log('작성완료 버튼 클릭', state)} />
    </div>
  );
}

export default Home;