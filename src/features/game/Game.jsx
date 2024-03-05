import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";

import Spinner from "../Spinner";
import FlashCard from "./FlashCard";
import GameStatus from "./GameStatus";

function Game() {
  const { gameStatus, isLoading, gameResult } = useSelector(
    (state) => state.game
  );
  // renderCount is a mutable ref used to count the number of times the component has rendered
  const renderCount = useRef(0);
  /**
   * Effect that logs the game status, loading state, and game result when component updates
   */
  useEffect(() => {
    renderCount.current++;
    console.log(
      `Game Status: ${gameStatus}, Is Loading: ${isLoading}, Game Result: ${gameResult}`
    );
  });
  // Conditional rendering of Spinner and FlashCard/GameStatus components
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
      <div>This component has rendered {renderCount.current} times.</div>;
    </>
  );
}

export default Game;
