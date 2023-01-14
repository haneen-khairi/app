import React, { useState } from "react";
import "../styles/header.css";
import logos from "../img/logo.png";
import icon1 from "../img/Component 215.png";
import icon2 from "../img/Component 216.png";
import icon3 from "../img/Component 217.png";
import icon4 from "../img/Component 214.png";

export const Header = (props) => {
  const [state, setState] = useState(false);
  let url = "";
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-md-2 col-lg-2 col-sm-12">
            <div className="logo">
              <img src={logos} width={200} alt="" />
            </div>
          </div>
          <div className="col-md-7 col-lg-7 col-sm-12">
            <div className="list-header">
              <ul className="d-flex">
                <li>
                  <a href={url} className="active"> {props.data ? props.data.link1 : "loading"}</a>
                </li>
                <li>
                  <a href={url}>{props.data ? props.data.link2 : "loading"}</a>
                </li>
                <li>
                  <a href={url}>{props.data ? props.data.link3 : "loading"}</a>
                </li>
                <li>
                  <a href={url}>{props.data ? props.data.link4 : "loading"}</a>
                </li>
                <li>
                  <a href={url}>العربية</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-lg-3 col-sm-12">
          <div className="social-links">
            <ul className="d-flex icons">
                <li><a href="" className="social-icon"> <img src={icon1} width={35} height={40} alt="" /></a></li>
                <li><a href="" className="social-icon"> <img src={icon2} width={35} height={40} alt="" /></a></li>
                <li><a href="" className="social-icon"> <img src={icon3} width={35} height={40} alt="" /></a></li>
                <li><a href="" className="social-icon"> <img src={icon4} width={35} height={40} alt="" /></a></li>
            </ul>
          </div>
          </div>
        </div>
      </div>
    </header>
  );
};

 
