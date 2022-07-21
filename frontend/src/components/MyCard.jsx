import React from "react";
import { Component } from "react";
import logoCropped from "./images/logoCropped.png";

class MyCard extends Component {
  state = {
    Photo: logoCropped,
    Title: "Harry Potter",
    Genre: "Fiction",
    Edition: "12th",
  };

  render() {
    return (
      <div>
        <div class="card" style={{ width: "20rem" }}>
          <img src={this.state.Photo} class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title" style={{ color: "#150e56" }}>
              {this.state.Title}
            </h5>
            <p class="card-text" style={{ color: "#150e56" }}>
              Genre: {this.state.Genre} <br />
              Edition: {this.state.Edition}
            </p>
            <a href="#" class="btn btn-secondary">
              Reserve
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default MyCard;
