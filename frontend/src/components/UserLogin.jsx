import "./Styling.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Login = () => {
  // const [userData, setUserData] = useState;

  // const handleChange = (e) => {
  //   e.preventDefault();
  //   setuser({ ...userData, [e.target.name]: [e.target.value] });
  // };
  // let navigate = useNavigate();
  // function routeChange() {
  //   let path = "/";
  //   navigate(path);
  //   window.location.reload();
  // }
  // const handleClick = (e) => {
  //   verifylogin(userData)
  //     .then((res) => {
  //       if (res.data.message === "loggedin") routeChange();
  //       else alert(res.data.message);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <div>
      <form action="" id="login-form" style={{ border: "1px solid black" }}>
        <h1>Welcome Back</h1>
        <div class="input-box">
          <input type="text" placeholder="Username" />
        </div>
        <div class="input-box">
          <input type="password" placeholder="Password" />
        </div>
        {/* <label>
          <input type="checkbox" name="remember" /> Remember me
        </label> */}
        <Link to="/profile">
          <button type="submit" class="login-btn">
            Login
          </button>
        </Link>
        <div class="bottom-links">
          <p>
            Dont have account? <a href="/Signup">Sign up</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
