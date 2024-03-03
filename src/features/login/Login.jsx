function Login() {

  function handleFormSubmit(e){
    
  }
  return (
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
  );
}

export default Login;
