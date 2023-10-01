import { useSearchParams } from 'react-router-dom';
import Button from '../component/Button';
import Header from '../component/Header';

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams)
  console.log(searchParams.get('sort'))

  return (
    <div>
      <Header 
        title={'Home'}
        leftChild={
          <Button 
          type={'positive'}
          text={'positive Btn'}
          onClick={() => console.log('positive Btn')}
          />
        }
        rightChild={
          <Button 
          type={'negative'}
          text={'negative Btn'}
          onClick={() => console.log('negative Btn')}
        />
        }
      />
    </div>
  );
}

export default Home;