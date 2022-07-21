import MyNavBar from "./UserNavBar";
import "./Styling.css";
import logoCropped from "./images/logoCropped.png";
import logo from "./images/logo.png";
import logo2 from "./images/logo2.png";
import MyCard from "./MyCardFFC";
import React from "react";
import { Col, Row } from "react-bootstrap";

const DeleteReservation = () => {
  const bookArray = [
    {
      Id: "1",
      Photo: logoCropped,
      Title: "Harry Potter",
      Genre: "Fiction",
      Edition: "12th",
    },
    {
      Id: "2",
      Photo: logo,
      Title: "DSD",
      Genre: "Study",
      Edition: "9th",
    },
    {
      Id: "3",
      Photo: logo2,
      Title: "MSI",
      Genre: "Education",
      Edition: "4th",
    },
  ];

  return (
    <div>
      <MyNavBar />
      <div style={{ backgroundColor: "#9398bb", height: "530px" }}>
        <br />
        <Row style={{ width: "100%" }}>
          {bookArray.map((bookInfo) => {
            return (
              <Col xs={12} sm={6} md={4} lg={4}>
                <MyCard key={bookInfo._Id} bookInfo={bookInfo} />
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default DeleteReservation;
