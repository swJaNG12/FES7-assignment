import './EmotionItem.css';

const EmotionItem = ({ id, name, img, onClick, isSelected }) => {
  const handleOnClick = () => {
    onClick(id);
  }
  return (
    <div className={["EmotionItem", isSelected ? `EmotionItem_on_${id}` : 'EmotionItem_off'].join(' ')} onClick={handleOnClick}>
      <img alt={name}  src={img}/>
      <span>{name}</span>
    </div>
  );
}

export default EmotionItem;