import "./Styling.css";
import { Link } from "react-router-dom";

const AdminLogin = () => {
  return (
    <div>
      <div id="adminLogin">
        <div class="col-md-6 col-lg-4 offset-lg-4 offset-md-3 mt-5">
          <div class="bg-light p-5 border shadow">
            <h3 id="adminLoginHeader">Admin Login</h3>
            <form>
              <div class="mb-4">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Username/Email"
                />
                <p class="form-text text-end">Enter Valid Username/Email</p>
              </div>
              <div class="mb-4">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Enter Password"
                />
                <p class="form-text text-end">Enter Valid Password</p>
              </div>
              {/* <div class="mb-4 form-check w-100">
                <label class="form-check-label">
                  <input type="checkbox" class="form-check-input" /> Remember Me
                </label>
                <a href="#" class="float-end">
                  Reset Password
                </a>
              </div> */}
              <Link to="/view">
                <button type="submit" class="btn btn-primary w-100 my-3 shadow">
                  Login
                </button>
              </Link>
              {/* <p class="text-center m-0">
                Not yet account, <a href="#">Please Signup</a>
              </p> */}
            </form>
          </div>
        </div>
      </div>

      {/* <img src="Uni.jpg" alt="" height="570px" />
      <div id="div1">
        <form action="">
          <p id="heading">Login</p>
          <hr style={"border: 1px solid rgb(204, 87, 32);"} />
          <br />
          <input type="text" class="type" placeholder="Username" />
          <br />
          <br />
          <input type="password" class="type" placeholder="Password" />
          <br />
          <p id="forgot">Forgot Password?</p>
          <br />
          <br />
          <button id="button">Login</button>
          <p id="member">
            Not a member?{" "}
            <a href="./FA19-BCE-085-A_signup.html" id="anchor">
              Signup
            </a>
          </p>
        </form>
      </div> */}
    </div>
  );
};

export default AdminLogin;
