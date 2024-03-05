import { useSelector } from "react-redux";

function AppNav() {
  const { totalLifeline } = useSelector((state) => state.game);
  const { userScore, userName } = useSelector((state) => state.user);
  return (
    <nav className="grid h-16  bg-[#3b82f6] text-white">
      <div className="flex flex-row items-center justify-between">
        <a
          className="grid auto-cols-max grid-flow-col items-center gap-4"
          href="/"
        >
          <img
            src="/img/logo.png"
            alt="Logo"
            width="55"
            height="50"
            className="mb-1 ms-1 mt-0.5"
          />
          <span className="text-2xl hover:font-bold hover:text-[#172554]">
            Exploding Kittens
          </span>
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
        <div className="flex gap-3" id="navbarSupportedContent">
          <div className="grid grid-cols-3 gap-x-3">
            <div className="">{"❤".repeat(totalLifeline)}</div>
            {userName ? (
              <div className="col-span-1">
                <strong>Score: </strong>
                {userScore}
              </div>
            ) : null}
            <div className="col-span-1">
              {userName ? (
                <>
                  Hello <strong>{userName}</strong>
                </>
              ) : (
                <a
                  href="/"
                  className="text-lg hover:hover:font-bold hover:text-[#172554]"
                >
                  Login
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default AppNav;
