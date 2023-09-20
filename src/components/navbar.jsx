import React from "react";
import { useState } from "react";
import { ReactDOM } from "react";
import { Link } from "react-router-dom";


function Navbar() {

  const [active, setActive] = React.useState(false);
  const ToggleActive = () => {
    setActive((prev) => !prev);
    if (!active) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100dvh";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    }
    console.log(active);
  };

  return (
    <>
      <div className="nav">
        <div>
          <div className="logo">
            <img src="./GreyMatter.png" alt="" />
          </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/faqs">Who are We ?</Link>
            </li>
            <li>
              <a href="#">Our Process</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="secondNav">
        <div className="wrapper">
          <div className="logo">
            <img src="./GreyMatter.png" alt="" />
          </div>
          <button id="open" onClick={ToggleActive}>
            <img src="./hamburger.png" alt="" />
          </button>
        </div>
      </div>
      <div className={`toggle ${active ? "active" : ""}`}>
        <div className="sideNav">
          <nav>
            <div className="logo">
              <img src="./GreyMatter.png" alt="" />
            </div>
            <button onClick={ToggleActive}>
              <img src="./close.png" alt="" />
            </button>
          </nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Who are We ?</a>
            </li>
            <li>
              <a href="#">Our Process</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
