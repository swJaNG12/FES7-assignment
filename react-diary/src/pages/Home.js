import { useSearchParams } from 'react-router-dom';
import Button from '../component/Button';

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams)
  console.log(searchParams.get('sort'))

  return (
    <div>
      Home
      <Button 
        type={'positive'}
        text={'positive Btn'}
        onClick={() => console.log('positive Btn')}
        />
      <Button 
        type={'negative'}
        text={'negative Btn'}
        onClick={() => console.log('negative Btn')}
      />
      <Button 
        text={'기본 Btn'}
        onClick={() => console.log('기본 Btn')}
      />
    </div>
  );
}

export default Home;