import "./App.css";

function App() {
  return (
    <>
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
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  New Game
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Quit
                </a>
              </li>
            </ul>
            <div className="d-flex text-white">
              <div className="me-2 px-2">❤❤❤❤❤</div>
              <div className="px-2">
                <strong>Score:</strong> 50
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="m-3 mx-5 vh-80">
        <div className="row h-100">
          <div className="col-9 m-auto h-100">
            <div className="card h-100 shadow">
              <h5 className="card-header bg-dark text-white">Login</h5>
              <div className="card-body bg-info-subtle d-flex justify-content-center align-items-center">
                <div className="card bg-dark border-0 w-50 p-3">
                  <div className="card-body text-center">
                    <form action="/game.html">
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control border-0 rounded-pill"
                          placeholder="Enter your name"
                          id="name"
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary rounded-pill px-4"
                      >
                        Start
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3 m-auto h-100">
            <div className="card h-100 shadow">
              <h5 className="card-header bg-dark text-white">Leader Board</h5>
              <div className="card-body bg-warning">
                <div className="bg-white p-2 px-3 rounded-pill w-100 mb-1">
                  <span className="bg-warning rounded-circle p-1 px-2 me-2">
                    1{" "}
                  </span>
                  Player-1
                </div>
                <div className="bg-white p-2 px-3 rounded-pill w-100 mb-1">
                  <span className="bg-warning rounded-circle p-1 px-2 me-2">
                    2{" "}
                  </span>
                  Player-4
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
