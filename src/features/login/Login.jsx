import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser, setLoader } from "../users/usersSlice";

function Login() {
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();

  // const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  async function handleFormSubmit(e) {
    dispatch(setLoader(true));
    e.preventDefault();
    dispatch(setLoader(false));
    dispatch(addUser(userName));
  }
  return (
    <div className="col-9 m-auto h-100">
      <div className="card h-100 shadow">
        <h5 className="card-header bg-dark text-white">Login</h5>
        <div className="card-body bg-info-subtle d-flex justify-content-center align-items-center">
          <div className="card bg-dark border-0 w-50 p-3">
            <div className="card-body text-center">
              <form onSubmit={handleFormSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control border-0 rounded-pill"
                    placeholder="Enter your name"
                    id="name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary rounded-pill px-4"
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
