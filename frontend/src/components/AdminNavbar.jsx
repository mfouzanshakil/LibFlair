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
              {/* create */}
              <li class="nav-item">
                <a class="nav-link" href="/create">
                  Create
                </a>
              </li>
              {/* view */}
              <li class="nav-item">
                <a class="nav-link" href="/view">
                  View
                </a>
              </li>
              {/* update  */}
              <li class="nav-item">
                <a class="nav-link" href="/update">
                  Update
                </a>
              </li>
              {/* delete */}
              <li class="nav-item">
                <a class="nav-link" href="/delete">
                  Delete
                </a>
              </li>
            </ul>
            <a href="adminlogin">
              <button
                type="button"
                id="adminNavbarButton1"
                class="btn btn-outline-secondary"
              >
                Log In
              </button>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MyNavBar;
