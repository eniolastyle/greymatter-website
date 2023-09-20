import React from "react";
import logo from "../assets/logo.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer-item">
          <div className="text">
            <img src={logo} alt="" />
            <p>
              We specialize in nurturing tech talents through immersive
              training, personalized mentorship, and strategic placements.
            </p>
          </div>
          <div className="about">
            <h3>About</h3>
            <ul>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Blogs</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="social">
            <h3>Follow Us</h3>
            <div className="media">
              <a href="">
                <img src={facebook} alt="" />
              </a>
              <a href="">
                <img src={instagram} alt="" />
              </a>
              <a href="">
                <img src={twitter} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>GreyMatter Inc. 2023</p>
      </div>
    </div>
  );
}

export default Footer;
