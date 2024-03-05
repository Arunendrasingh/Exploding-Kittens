import { useDispatch } from "react-redux";
import { startNewGame } from "./gameSlice";
import { resetForNewGame, logoutUser } from "../users/usersSlice";

function GameStatus({ children }) {
  const dispatch = useDispatch();
  return (
    <div className="container mt-5">
      <div className="row align-item-center text-center">
        <div className="row">
          <h1>{children}</h1>
        </div>

        <div className="row justify-content-evenly mt-5">
          <button
            className="col-4 btn btn-primary"
            onClick={() => {
              dispatch(startNewGame());
              dispatch(resetForNewGame());
            }}
          >
            Start New Game
          </button>
          <button
            className="col-4 btn btn-danger"
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
