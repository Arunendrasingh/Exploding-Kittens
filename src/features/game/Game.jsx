import React from "react";
import { useSelector } from "react-redux";

import Spinner from "../Spinner";
import FlashCard from "./FlashCard";
import GameStatus from "./GameStatus";

function Game() {
  const { gameStatus, isLoading } = useSelector((state) => state.game);
  console.log("Game Status: ", gameStatus)
  // Here Load all Game related Data from API
  return <>
  {isLoading && <Spinner />}
  {gameStatus !== "finished" ? <FlashCard /> : <GameStatus />}
  </>;
}

export default Game;
