import Concept from "./Concept";

const Concepts = (props) => {
  console.log(props);
  return (
    <ul id="concepts">
      {props.concepts.map((el, id) => {
        return <Concept key={id} {...el} />;
      })}
    </ul>
  );
};

export default Concepts;
