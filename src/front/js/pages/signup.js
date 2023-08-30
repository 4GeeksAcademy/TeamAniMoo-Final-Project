import React from "react";
import loGo from "../../img/Logo1.png";
import "../../styles/signup.css";
/*
Things needed for Signup Page
    - First Name
    - Last Name
    - User Name
    - Email
    - Password
    - Checkboxes for Privacy Policy & Email Notifications
*/
export const Signup = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-header text-center ">
          <img src={loGo} className="loGo" alt="..." />
          <h3>New to Animoo!?</h3>
          <h4>🐮Sign Up Here!🥛</h4>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="form-outline">
                <input
                  type="text"
                  id="fstName"
                  className="form-control"
                  placeholder="First Name"
                />
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="form-outline">
                <input
                  type="text"
                  id="lstName"
                  className="form-control"
                  placeholder="Last Name"
                />
              </div>
            </div>
          </div>
          <div className="form-outline mb-4">
            <input
              type="email"
              id="email2"
              className="form-control"
              placeholder="Email Address"
            />
          </div>
          <div className="form-outline mb-4">
            <input
              type="password"
              id="pass2"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <button type="button" className="signup-btn ">
            {" "}
            Sign Up
          </button>
          <div className="text-center">
            <p>or Sign Up with:</p>
            <div className="link-btns">
              <button type="button" className="btn btn-link btn floating mx-1">
                <i class="bi bi-twitter"></i>
              </button>

              <button type="button" className="btn btn-link btn floating mx-1">
                <i class="bi bi-google"></i>
              </button>

              <button type="button" className="btn btn-link btn floating mx-1">
                <i class="bi bi-github"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
