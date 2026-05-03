import Card from "./Card";

function Content(props) {
  return (
    <div>
      {props.items.map((item, index) => (
        <Card key={index} name={item} />
      ))}
    </div>
  );
}

export default Content;