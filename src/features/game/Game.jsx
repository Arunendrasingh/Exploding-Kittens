import React from "react";
import { useSelector } from "react-redux";

import Spinner from "../Spinner";
import FlashCard from "./FlashCard";
import GameStatus from "./GameStatus";

function Game() {
  const { gameStatus, isLoading, gameResult } = useSelector(
    (state) => state.game
  );
  const {userName, totalGameScore, totalGame } = useSelector((state) => state.user);
  console.log(
    `Total Game Played By '${userName }': ${totalGame}, and total Score: ${totalGameScore}`
  );
  console.log("Game Status: ", gameStatus);
  // Here Load all Game related Data from API
  return (
    <>
      {isLoading && <Spinner />}
      {gameStatus !== "finished" ? (
        <FlashCard />
      ) : (
        <GameStatus>
          {gameResult === "Lost" ? (
            <span>
              😢☹️☹️☹️😢 <br />
              Oops! 🎮 You lost the game this time. No worries, though! Every
              setback is just a set-up for a jaw-dropping comeback. Better luck
              on your next attempt! <br />
            </span>
          ) : (
            <span> You win the game. 💪🍀 🌌🚀</span>
          )}
        </GameStatus>
      )}
    </>
  );
}

export default Game;
