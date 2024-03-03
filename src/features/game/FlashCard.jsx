import { useState } from "react";
// import Card from "./Card";

const cards = ["1", "2", "3", "4", "5"];

function FlashCard() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className="container rounded bg-dark-subtle vh-80 p-5 mt-5 d-flex align-items-center justify-content-center card-deck">
      <div className="row h-75 w-100 justify-content-around align-items-stretch">
        {cards.map((cardDetail) => (
          <div
            className="col-12 col-md-2 my-2 my-md-none"
            onClick={() => handleClick(selectedId)}
          >
            <CardBack />
          </div>
        ))}
      </div>
    </div>
  );
}

function CatCard() {
  return <div className="bg-sm-transparent card mycard card-kitty"></div>;
}
function BombCard() {
  return <div className="bg-sm-transparent card mycard card-bomb"></div>;
}
function DefuseCard() {
  return <div className="bg-sm-transparent card mycard card-defuse"></div>;
}
function SuffleCard() {
  return <div className="bg-sm-transparent card mycard card-suffle"></div>;
}
function CardBack() {
  return <div className="card bg-md-transparent mycard card-back"></div>;
}
export default FlashCard;
