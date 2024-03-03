import { useSelector } from "react-redux";
import "./App.css";
import AppNav from "./features/app_nav/AppNav";
import Login from "./features/login/Login";
import Spinner from "./features/Spinner";
import Game from "./features/game/Game";

function App() {
  const { userName, isLoading } = useSelector((state) => state.user);
  return (
    <>
      {isLoading && <Spinner />}
      <AppNav />
      <div className="m-3 mx-5 vh-80">
        <div className="row h-100">{!userName ? <Login /> : <Game />}</div>
      </div>
    </>
  );
}

export default App;
