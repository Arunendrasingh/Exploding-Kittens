import { useSelector } from "react-redux";

function AppNav() {
  const { totalLifeline } = useSelector((state) => state.game);
  const { userScore, userName } = useSelector((state) => state.user);
  return (
    <nav
      className=""
      data-bs-theme=""
    >
      <div className="">
        <a className="" href="/">
          <img
            src="/img/logo.png"
            alt="Logo"
            width="30"
            height="30"
            className=""
          />
          Exploding Kittens
        </a>
        <button
          className=""
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className=""></span>
        </button>
        <div className="" id="navbarSupportedContent">
          <ul className="">
            {/* <li className="">
              <a className="" aria-current="page" href="/">
                Home
              </a>
            </li> */}
            <li className="">
              <a className="" href="/">
                New Game
              </a>
            </li>
          </ul>
          <div className="">
            {userName && (
              <div className="">
                Hello <strong>{userName}</strong>
              </div>
            )}
            <div className="">{"❤".repeat(totalLifeline)}</div>
            <div className="">
              <strong>Score: </strong>
              {userScore}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default AppNav;
