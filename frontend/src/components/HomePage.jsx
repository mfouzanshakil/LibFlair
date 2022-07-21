import "./Styling.css";
import logo from "./images/logo.png";
import { BrowserRouter, Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div id="HomePageContainer">
        <p id="welcomeOnHome">Welcome to LibFlair!</p>
        <img id="logoOnHome" src={logo} alt="This is a logo of LibFlair!" />
        <br /> <br /> <br />
        <Link to="/AdminLogin">
          <button
            id="button1Home"
            type="button"
            class="btn btn-outline-primary"
          >
            Admin
          </button>
        </Link>
        <Link to="/Signup">
          <button
            id="button2Home"
            type="button"
            class="btn btn-outline-primary"
          >
            Member
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
