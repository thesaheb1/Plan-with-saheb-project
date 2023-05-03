import Card from "./card";

function Cards({ Data, RemoveTour }) {
  return (
    <>
      {Data.map((d) => {
        return <Card key={d.id} {...d} removecard={RemoveTour}></Card>;
      })}
    </>
  );
}

export default Cards;
