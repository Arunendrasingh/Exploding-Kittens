import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCardDetail } from "./gameSlice";
// import Card from "./Card";

// const cards = ["1", "2", "3", "4", "5"];
const host = "http://localhost:8000";

function FlashCard() {
  const { cardDetail } = useSelector((state) => state.game);
  const dispatch = useDispatch();
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  function getRandomCards(cardList, count) {
    let result_arr = [];
    for (let i = 0; i < count; i++) {
      let value = Math.floor(Math.random() * cardList.length);
      console.log("Default Random Index: ", value);
      let randomCard = cardList[value];
      result_arr.push(randomCard);
    }
    console.log("Result Detail: ", result_arr);
    return result_arr;
  }

  useEffect(function () {
    async function getCardDetail() {
      const response = await fetch(`${host}/cards`);
      const cardDetail = await response.json();
      console.log("Card Detail: ", cardDetail);
      let data = getRandomCards(cardDetail, 5);
      // dispatching the list.
      dispatch(
        setCardDetail({
          cardDetail: data,
          cardLength: data.length,
        })
      );
    }
    getCardDetail();
    // console.log("Card Detail: ", cardDetail)
  }, []);

  return (
    <div className="container rounded bg-dark-subtle vh-80 p-5 mt-5 d-flex align-items-center justify-content-center card-deck">
      <div className="row h-75 w-100 justify-content-around align-items-stretch">
        {cardDetail.map((cardDetail) => (
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
