import React from "react";

function Delete({ message, onDelete }) {
  return (
    <div className="main-del">
      <div className="del-container">
        <h3 className="pop-text">{message}</h3>
        <div style={{ display: "flex", alignItems: "center" }}>
          <button className="accept" onClick={() => onDelete(true)}>
            Yes
          </button>
          <button className="deny" onClick={() => onDelete(false)}>
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default Delete;
