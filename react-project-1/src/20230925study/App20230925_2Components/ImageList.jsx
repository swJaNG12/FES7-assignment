import ImageItem from "./ImageItem";


const ImageList = ({ imageList }) => {
  return (
    <ul>
      {imageList.map(el => {
        return <ImageItem key={el.id} {...el} />
      })}
    </ul>
  );
}

export default ImageList;