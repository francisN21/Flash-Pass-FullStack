import React from "react";
import logo from "./FlashPass-gen1.png";
import MainPassGen from "../Components/PassGen/MainPassGen";

import PasswordEngine from "../Components/PassGen/PasswordEngine";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="head">
          <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="display-4">
                Flash Pass!
                <span>
                  <img src={logo} className="App-logo" alt="logo" />
                </span>
              </h1>

              <p className="lead">Helps you create and store your password.</p>
            </div>
          </div>
          <div className="row">
            <div className="container generate-pass">
              <PasswordEngine className="passEng" />
            </div>
          </div>
        </div>
      </div>
      <div className="container"></div>
    </>
  );
};

export default Home;
