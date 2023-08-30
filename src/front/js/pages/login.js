import React from "react";
import { Link } from "react-router-dom";
import loGo from "../../img/Logo1.png";
import "../../styles/login.css";

export const Login = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-header text-center">
          <img src={loGo} className="loGo" alt="..." />
          <h3>Welcome Back!</h3>
          <h4>🐮Login Here!</h4>
        </div>
        <div className="card-body">
          <div className="form-outline mb-4">
            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
            />
          </div>
          <div className="form-outline mb-4">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <div className="row mb-4 g-5">
            <div className="col d-flex justify-content-center">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="form1"
              />
              <label className="form-check-label" for="form1">
                {" "}
                Remember Me
              </label>
            </div>
            <div className="col">
              <a href="#">Forgot Password?</a>
            </div>
          </div>
          <button type="button" className="signin-btn">
            {" "}
            Sign In
          </button>
          <div className="text-center">
            <p>or Sign In with:</p>
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
          <div className="text-center" id="register">
            <p>Not a Member?</p> <Link to="/Signup"> Register Here </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
