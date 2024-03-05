import { useDispatch } from "react-redux";
import { startNewGame } from "./gameSlice";
import { resetForNewGame, logoutUser } from "../users/usersSlice";

function GameStatus({ children }) {
  const dispatch = useDispatch();
  return (
    <div className="">
      <div className="">
        <div className="">
          <h1>{children}</h1>
        </div>

        <div className="">
          <button
            className=""
            onClick={() => {
              dispatch(startNewGame());
              dispatch(resetForNewGame());
            }}
          >
            Start New Game
          </button>
          <button
            className=""
            onClick={() => dispatch(logoutUser())}
          >
            Logout & Quit
          </button>
        </div>
      </div>
    </div>
  );
}

export default GameStatus;
