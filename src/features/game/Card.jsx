import React, { useState } from "react";

export default function Card({ index, currentCard, selectedCard }) {
  console.log("Rendering Card: ", selectedCard);
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
    console.log("Rendering From Card");
    return <CardBack />;
  }
}

function CardBack() {
  return <div className="card bg-md-transparent mycard card-back"></div>;
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
//   function CardBack() {
//     return <div className="card bg-md-transparent mycard card-back"></div>;
//   }
