import React from "react";
import robinUrl from "../../img/robin.png";

const Articles = () => (
  <>
    <div className="container">
      <div className="cards">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col-md-4">
            <img className="imageGo" src={robinUrl} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h4 className="card-title text-center">Article Title</h4>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Vivamus arcu felis bibendum ut tristique et egestas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Articles;
