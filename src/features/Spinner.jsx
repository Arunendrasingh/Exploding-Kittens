import React from "react";

function Spinner() {
  return (
    <div className="z-3 overflow-hidden bg-light bg-gradient bg-opacity-50 position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center">
      <div className="text-dark spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Spinner;
