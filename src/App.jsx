import { useSelector } from "react-redux";
import "./App.css";
import AppNav from "./features/app_nav/AppNav";
import FlashCard from "./features/game/FlashCard";
import Login from "./features/login/Login";
import Spinner from "./features/Spinner";

function App() {
  const { userName, isLoading } = useSelector((state) => state.user);
  return (
    <>
      {isLoading && <Spinner />}
      <AppNav />
      <div className="m-3 mx-5 vh-80">
        <div className="row h-100">{!userName ? <Login /> : <FlashCard />}</div>
      </div>
    </>
  );
}

export default App;
