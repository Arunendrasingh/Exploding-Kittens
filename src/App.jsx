import { useSelector } from "react-redux";
import "./App.css";
import AppNav from "./features/app_nav/AppNav";
import MainGame from "./features/game/FlashCard";
import Login from "./features/login/Login";

function App() {
  const userSelector = useSelector((state) => state.user);
  return (
    <>
      <AppNav />
      <div className="m-3 mx-5 vh-80">
        <div className="row h-100">
          {!userSelector.userName ? <Login /> : <MainGame />}
        </div>
      </div>
    </>
  );
}

export default App;
