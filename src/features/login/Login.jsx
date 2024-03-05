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
    dispatch(startNewGame())
    dispatch(setLoader(false));
  }
  return (
    <div className="">
      <div className="">
        <h5 className="">Login</h5>
        <div className="">
          <div className="">
            <div className="">
              <form onSubmit={handleFormSubmit}>
                <div className="">
                  <input
                    type="text"
                    className=""
                    placeholder="Enter your name"
                    id="name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className=""
                >
                  Start Game
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
