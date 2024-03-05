export default function Card({ index, currentCard, selectedCard }) {
  if ((selectedCard?.index === index) & (selectedCard?.name === "Cat")) {
    return <CatCard />;
  } else if (
    (selectedCard?.index === index) &
    (selectedCard?.name === "Defuse")
  ) {
    return <DefuseCard />;
  } else if (
    (selectedCard?.index === index) &
    (selectedCard?.name === "Exploding Kitten")
  ) {
    return <BombCard />;
  } else if (
    (selectedCard?.index === index) &
    (selectedCard?.name === "Shuffle")
  ) {
    return <SuffleCard />;
  } else {
    return <CardBack />;
  }
}

function CardBack() {
  return <div className=""></div>;
}
function CatCard() {
  return <div className=""></div>;
}
function BombCard() {
  return <div className=""></div>;
}
function DefuseCard() {
  return <div className=""></div>;
}
function SuffleCard() {
  return <div className=""></div>;
}

