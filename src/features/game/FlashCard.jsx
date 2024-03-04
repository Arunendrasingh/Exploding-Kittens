import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseLifeline,
  increaseLifeline,
  setCardDetail,
  setSelectedCard,
  setGameStatus,
  setIsLoading,
  setGameResult,
} from "./gameSlice";
import Spinner from "../Spinner";
import Card from "./Card";
import { updateUserCurrentScore } from "../users/usersSlice";

const host = "http://localhost:8000";

function FlashCard() {
  const { cardDetail, totalLifeline, selectedCard, isLoading } = useSelector(
    (state) => state.game
  );

  const dispatch = useDispatch();

  function filterSelectedCard({ name, curr_index }) {
    // Calculate the New cardLength
    // new Card List after removing this card from list.
    const newCardList = cardDetail.filter(
      (value, index) => curr_index !== index
    );
    if (name === "Cat") {
      dispatch(
        setCardDetail({
          cardDetail: newCardList,
          cardLength: newCardList.length,
        })
      );
    } else if (name === "Defuse") {
      dispatch(
        setCardDetail({
          cardDetail: newCardList,
          cardLength: newCardList.length,
        })
      );
      dispatch(increaseLifeline());
    } else if (name === "Exploding Kitten") {
      if (totalLifeline) {
        dispatch(decreaseLifeline());
      } else {
        // If no life present then, end the game.
        dispatch(setGameResult("Lost"));
        dispatch(setGameStatus("finished"));
      }
      // Setting-up new filtered detail.
      dispatch(
        setCardDetail({
          cardDetail: newCardList,
          cardLength: newCardList.length,
        })
      );
    } else if (name === "Shuffle") {
      getCardDetail();
      dispatch(setSelectedCard(null));
    }
    console.log("Card length: ", cardDetail.length);
    console.log("Card Name", name, curr_index);
    if (newCardList.length === 0) {
      dispatch(setGameResult("Win"));
      dispatch(updateUserCurrentScore());
    }
  }

  function handleClick(selectedCardName, index) {
    dispatch(
      setSelectedCard({
        name: selectedCardName,
        index: index,
      })
    );
    // setup a setTimeout function for further dispatch function.
    setTimeout(() => {
      filterSelectedCard({
        name: selectedCardName,
        curr_index: index,
      });
    }, 1000);
  }

  function getRandomCards(cardList, count) {
    let result_arr = [];
    for (let i = 0; i < count; i++) {
      let value = Math.floor(Math.random() * cardList.length);
      let randomCard = cardList[value];
      result_arr.push(randomCard);
    }
    return result_arr;
  }

  const getCardDetail = useCallback(
    async function getCardDetail() {
      dispatch(setIsLoading(true));
      const response = await fetch(`${host}/cards`);
      const cardDetail = await response.json();
      let data = getRandomCards(cardDetail, 5);
      // dispatching the list.
      dispatch(
        setCardDetail({
          cardDetail: data,
          cardLength: data.length,
        })
      );
      dispatch(setIsLoading(false));
    },
    [dispatch]
  );

  useEffect(
    function () {
      getCardDetail();
    },
    [getCardDetail]
  );

  return (
    <>
      {isLoading && <Spinner />}
      <div className="container rounded bg-dark-subtle vh-80 p-5 mt-5 d-flex align-items-center justify-content-center card-deck">
        <div className="row h-75 w-100 justify-content-around align-items-stretch">
          {cardDetail.map((cardDetail, index) => (
            <div
              key={index}
              className="col-12 col-md-2 my-2 my-md-none"
              onClick={() => handleClick(cardDetail.name, index)}
            >
              <Card
                index={index}
                currentCard={cardDetail.name}
                selectedCard={selectedCard}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FlashCard;
