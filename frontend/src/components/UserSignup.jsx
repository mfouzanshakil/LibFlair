import { useState } from "react";
import { Link } from "react-router-dom";
import { addUser } from "../Service/api";

const Signup = () => {
  const [userData, setUserData] = useState({
    userName: "",
    password: "",
  });

  const { userName, password } = userData;

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: [e.target.value] });
  };

  const addDetails = async (e) => {
    e.preventDefault();
    await  addUser(userData);
  };

  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-md-6 offset-md-3">
            <div class="signup-form">
              <form action="" class="mt-5 border p-4 bg-light shadow">
                <h4 class="mb-5 text-secondary">Create Your Account</h4>
                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label>
                      First Name<span class="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="fname"
                      class="form-control"
                      placeholder="Enter First Name"
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label>
                      Last Name<span class="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="Lname"
                      class="form-control"
                      placeholder="Enter Last Name"
                    />
                  </div>
                  <div class="mb-3 col-md-12">
                    <label>
                      User Name<span class="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="userName"
                      class="form-control"
                      placeholder="Enter User Name"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div class="mb-3 col-md-12">
                    <label>
                      Password<span class="text-danger">*</span>
                    </label>
                    <input
                      type="password"
                      name="password"
                      class="form-control"
                      placeholder="Enter Password"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div class="mb-3 col-md-12">
                    <label>
                      Confirm Password<span class="text-danger">*</span>
                    </label>
                    <input
                      type="password"
                      name="confirmpassword"
                      class="form-control"
                      placeholder="Confirm Password"
                    />
                  </div>
                  <div class="col-md-12">
                    <Link to="/profile">
                      <button
                        class="btn btn-primary float-end"
                        onClick={(e) => addDetails(e)}
                      >
                        Signup Now
                      </button>
                    </Link>
                  </div>
                </div>
              </form>
              <p class="text-center mt-3 text-secondary">
                If you have account, Please <a href="/Login">Login Now</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
