import React from "react";
import logo from "../img/logo.png";
import "../styles/footer.css";
export const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="logo-sec">
                <img src={logo} width={200} />
                <p>subscribe to our news letter</p>
                <div className="subscribe-input">
                  <form>
                    <input
                      type="email"
                      placeholder="Enter your Email"
                      className="mail-input"
                    />
                    <button type="submit" className=" btn btn-submit">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="link-footer">
                <h4>Quick Links</h4>
                <ul>
                  <li>
                    <a href="">Our Partners</a>
                  </li>
                  <li>
                    <a href="">Contact Us</a>
                  </li>
                  <li>
                    <a href="">About Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="link-footer">
                <h4>Legal</h4>
                <ul>
                  <li>
                    <a href="">Terms nad Conditions</a>
                  </li>
                  <li>
                    <a href="">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="">Cancelation</a>
                  </li>
                  <li>
                    <a href="">Disclaimer</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
