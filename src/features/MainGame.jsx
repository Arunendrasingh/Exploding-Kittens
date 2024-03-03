function MainGame() {
    return (<>
        <nav className="navbar bg-primary navbar-expand-lg bg-body-primary" data-bs-theme="dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">
                <img src="/img/logo.png" alt="Logo" width="30" height="30"
                    className="d-inline-block align-text-top rounded-circle mx-1" />
                Exploding Kittens
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/game.html">New Game</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Quit</a>
                    </li>
                </ul>
                <div className="d-flex text-white">
                    <div className="me-2 px-2">❤❤❤❤❤</div>
                    <div className="px-2"><strong>Score:</strong> 50</div>
                </div>
            </div>
        </div>
    </nav>
    <div
        className="container rounded bg-dark-subtle vh-80 p-5 mt-5 d-flex align-items-center justify-content-center card-deck">
        <div className="row h-75 w-100">
            <div className="col-2 m-auto card mycard card-kitty">
            </div>
            <div className="col-2 m-auto card mycard card-bomb">
            </div>
            <div className="col-2 m-auto card mycard card-defuse">
            </div>
            <div className="col-2 m-auto card mycard card-suffle">
            </div>
            <div className="col-2 m-auto card mycard card-back">
            </div>
        </div>
    </div>
    </>
    )
}

export default MainGame
