const ImageItem =  ({ download_url }) => {
  return (
    <li>
      <img src={download_url} alt="" style={{width: 200, height:200}} />
    </li>
  );
}

export default ImageItem;