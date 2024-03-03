import { useSelector } from "react-redux";

function AppNav() {
  const { totalLifeline } = useSelector((state) => state.game);
  const { userScore, userName } = useSelector((state) => state.user);
  return (
    <nav
      className="navbar bg-primary navbar-expand-lg bg-body-primary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src="/img/logo.png"
            alt="Logo"
            width="30"
            height="30"
            className="d-inline-block align-text-top rounded-circle mx-1"
          />
          Exploding Kittens
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="/">
                New Game
              </a>
            </li>
          </ul>
          <div className="d-flex text-white">
            {userName && (
              <div className="me-2 px-2">
                Hello <strong>{userName}</strong>
              </div>
            )}
            <div className="me-2 px-2">{"❤".repeat(totalLifeline)}</div>
            <div className="px-2">
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
