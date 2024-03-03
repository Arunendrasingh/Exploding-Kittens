import "./App.css";
import AppNav from "./features/app_nav/AppNav";
import MainGame from "./features/game/FlashCard";

function App() {
  return (
    <>
      <AppNav />
      <div className="m-3 mx-5 vh-80">
        <div className="row h-100">
          <MainGame />
        </div>
      </div>
    </>
  );
}

export default App;
