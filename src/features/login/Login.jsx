import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser, setLoader } from "../users/usersSlice";
import { startNewGame } from "../game/gameSlice";

function Login() {
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();

  // const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  async function handleFormSubmit(e) {
    dispatch(setLoader(true));
    e.preventDefault();
    dispatch(addUser(userName));
    dispatch(startNewGame());
    dispatch(setLoader(false));
  }
  return (
    <div className="flex h-dvh items-center justify-center">
      <div className="grid h-80 grid-rows-6 rounded-xl bg-slate-100 p-4 shadow-2xl">
        <h1 className="font my-auto text-center text-3xl font-bold uppercase text-blue-700 text-opacity-90">
          Play Exploding Kitten Game
        </h1>
        <div className="row-span-5 m-auto  h-4/5 w-4/5 justify-center rounded-2xl bg-slate-200 shadow-xl">
          <form onSubmit={handleFormSubmit} className="m-3 px-7 pt-6">
            <div className="mb-5">
              <label
                htmlFor="name"
                className="font-bold text-slate-500"
                aria-hidden="true"
              >
                Start New Game
              </label>
              <input
                type="text"
                className="h-9 w-full rounded-md border-0 px-3 ring-2 ring-slate-500 focus:outline-none focus:ring-slate-600"
                placeholder="Enter your name"
                id="name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="rounded-full bg-blue-600 p-2 text-white ring ring-slate-500 ring-offset-2 transition-opacity hover:w-36 hover:ring-4"
            >
              Start Game &gt;&gt;
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
