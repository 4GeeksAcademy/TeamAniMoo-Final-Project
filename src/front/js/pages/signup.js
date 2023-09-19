import React, { useState, useContext } from "react";
import loGo from "../../img/Logo1.png";
import { Context } from "../store/appContext";
import "../../styles/signup.css";

export const Signup = () => {
  const { store, actions } = useContext(Context);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = (e) => {
    e.preventDefault();
    actions.signup(firstName, lastName, email, password);
  };

  return (
    <div className="container">
      <form>
        <div className="card">
          <div className="card-header text-center">
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
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
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
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-outline mb-4">
              <input
                type="password"
                id="pass2"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="button" className="signup-btn" onClick={(e) => signup(e)}>
              Sign Up
            </button>
            <div className="text-center">
              <p>or Sign Up with:</p>
              <div className="link-btns">
                <button type="button" className="btn btn-link btn floating mx-1">
                  <i className="bi bi-twitter"></i>
                </button>

                <button type="button" className="btn btn-link btn floating mx-1">
                  <i className="bi bi-google"></i>
                </button>

                <button type="button" className="btn btn-link btn floating mx-1">
                  <i className="bi bi-github"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};