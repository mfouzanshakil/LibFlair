import "./Styling.css";
import icon from "./images/icon.jpg";
import { BrowserRouter, Link } from "react-router-dom";

const MyNavBar = () => {
  return (
    <div>
      <nav id="userNavBarColor" class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <div id="TRIconDiv">
              <img id="topRightIcon" src={icon} alt="LIBFLAIR" />
            </div>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              {/* view */}
              <li class="nav-item">
                <a class="nav-link" href="/loans">
                  My Loans
                </a>
              </li>
              {/* create */}
              <li class="nav-item">
                <a class="nav-link" href="/newReservation">
                  New Reservation
                </a>
              </li>
              {/* delete */}
              <li class="nav-item">
                <a class="nav-link" href="/deleteReservation">
                  Delete Reservation
                </a>
              </li>
              {/* update  */}
              <li class="nav-item">
                <a class="nav-link" href="/profile">
                  Profile
                </a>
              </li>
            </ul>
            <Link to="/Login">
              <button
                type="button"
                id="userNavbarButton1"
                class="btn btn-outline-secondary"
              >
                Log In
              </button>
            </Link>
            <Link to="/Signup">
              <button
                type="button"
                id="userNavbarButton2"
                class="btn btn-outline-secondary"
              >
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MyNavBar;
