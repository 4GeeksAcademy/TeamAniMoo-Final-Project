import React from "react";
import logoImg from "../../img/Logo1.png";

import "../../styles/footer.css";

export const Footer = () => {
  return (
    <footer className="bg-dark text-center text-white fixed-bottom">
      <div className="container p-2 pb-0">
        <section>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <i className="fab fa-twitter"></i>
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <i className="fab fa-google"></i>
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <i className="fab fa-instagram"></i>
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <i className="fab fa-github"></i>
          </a>
        </section>
        <div className="text-center pb-2"><img src={logoImg} className="logo"/><span className="text">Created by Jaylyn Stample and Christopher Garcia</span></div>
      </div>
    </footer>
  );
};