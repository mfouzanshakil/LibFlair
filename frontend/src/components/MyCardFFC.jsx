import React from "react";
import { Component } from "react";
import logoCropped from "./images/logoCropped.png";

function MyCard(bookInfo) {
  return (
    <div>
      <div className="card" style={{ width: "20rem" }}>
        <img src={bookInfo.Photo} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title" style={{ color: "#150e56" }}>
            {bookInfo.Title}
          </h5>
          <p className="card-text" style={{ color: "#150e56" }}>
            Genre: {bookInfo.Genre} <br />
            Edition: {bookInfo.Edition}
          </p>
          <a href="#" className="btn btn-secondary">
            Reserve
          </a>
        </div>
      </div>
    </div>
  );
}

export default MyCard;
