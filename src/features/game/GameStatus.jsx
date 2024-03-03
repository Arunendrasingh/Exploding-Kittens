function GameStatus() {
  return (
    <div className="container mt-5">
      <div className="row align-item-center text-center">
        <div className="row">
          <h1>
            😢☹️☹️☹️😢 <br />
            Oops! 🎮 You lost the game this time. No worries, though! Every
            setback is just a set-up for a jaw-dropping comeback. Better luck on
            your next attempt! <br />
            💪🍀 🌌🚀
          </h1>
        </div>

        <div className="row justify-content-evenly mt-5">
          <button className="col-4 btn btn-primary">Start New Game</button>
          <button className="col-4 btn btn-danger">Quit & Logout</button>
        </div>
      </div>
    </div>
  );
}

export default GameStatus;
