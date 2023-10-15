const Concept = (props) => {
  const { title, image, description } = props;
  return (
    <li className="concept">
      <img src={image} alt="TODO: TITLE" />
      <h2>TODO: {title}</h2>
      <p>TODO: {description}</p>
    </li>
  );
};

export default Concept;
