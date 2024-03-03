import React from "react";

export default function LeaderBoard() {
  return (
    <div className="col-3 m-auto h-100">
      <div className="card h-100 shadow">
        <h5 className="card-header bg-dark text-white">Leader Board</h5>
        <div className="card-body bg-warning">
          <div className="bg-white p-2 px-3 rounded-pill w-100 mb-1">
            <span className="bg-warning rounded-circle p-1 px-2 me-2">1 </span>
            Player-1
          </div>
          <div className="bg-white p-2 px-3 rounded-pill w-100 mb-1">
            <span className="bg-warning rounded-circle p-1 px-2 me-2">2 </span>
            Player-4
          </div>
        </div>
      </div>
    </div>
  );
}
