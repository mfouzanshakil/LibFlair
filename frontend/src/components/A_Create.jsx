import React from "react";
// import { useState } from "react";
import MyNavBar from "./AdminNavbar";
import "./Styling.css";
// import { createBook } from "../Service/api";

const Create = () => {
  // const [bookInfo, addBookInfo] = useState({
  //   ISBN: "",
  //   Title: "",
  //   Author: "",
  //   Date: "",
  //   Edition: "",
  // });

  // const { ISBN, Title, Author, Date, Edition } = bookInfo;

  // const handleChange = (e) => {
  //   addBookInfo({ ...bookInfo, [e.target.ISBN]: [e.target.value] });
  // };

  // const addDetails = async (e) => {
  //   e.preventDefault();
  //   await createBook(bookInfo);
  // };

  return (
    <div>
      <div id="greyBackgroundColor">
        <MyNavBar />
        <center>
          <div style={{ width: "400px" }}>
            <form>
              <h3 style={{ marginTop: "80px", color: "#150e56" }}>
                Create a new record:
              </h3>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="ISBN"
                  placeholder="ISBN"
                  // onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="Title"
                  placeholder="Title"
                  // onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="Author"
                  placeholder="Author"
                  // onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="Date"
                  placeholder="Date of publication"
                  // onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="Edition"
                  placeholder="Edition"
                  // onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="d-grid">
                <button
                  type="submit"
                  className="btn btn-secondary"
                  // onClick={(e) => addDetails(e)}
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </center>
      </div>
    </div>
  );
};

export default Create;
