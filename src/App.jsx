import { useSelector } from "react-redux";
import "./App.css";
import AppNav from "./features/app_nav/AppNav";
import Login from "./features/login/Login";
import Spinner from "./features/Spinner";
import Game from "./features/game/Game";

function App() {
  const { userName } = useSelector((state) => state.user);
  return (
    <>
      {!userName ? (
        <Login />
      ) : (
        <>
          <AppNav />
          <Game />
        </>
      )}
    </>
  );
}

export default App;
