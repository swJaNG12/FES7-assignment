import { useEffect } from "react";
import { useState } from "react";
import ImageList from "./20230925study/App20230925_2Components/ImageList";
import useScroll from './20230925study/Hooks/useScroll';

const App20230925_2 = () => {

  const [imageList, setImageList] = useState([]);
  const [pageToFetch, setPageToFetch] = useState(1);

  const isBottom = useScroll();
  console.log(isBottom);

  const fetchImageByPage = async () => {
    try {
      const response = await fetch(`https://picsum.photos/v2/list?page=${pageToFetch}&limit=6`);
      if(!response.ok) {
        throw new Error('HTTP ERROR!!!');
      }

      const data = await response.json();

      setImageList([...imageList, ...data]);
      console.log('패치!!!!')

    } catch (error) {
        console.error(error);
    }
  }

  useEffect(() => {
    setPageToFetch((prevPage) => prevPage + 1)
  }, [isBottom])

  useEffect(() => {
    fetchImageByPage();
  }, [pageToFetch])
 
  return (
    <>
      <ImageList imageList={imageList} />
    </>
  );
}

export default App20230925_2