import React from "react";
import "./Header.css";
import logo from "../../logo.svg";

const Header = () => (
  <div className="header">
    <div className="container">
      <div className="row">
        <p>AQUI</p>
        <img src={logo} width="100" alt=""/>
      </div>
    </div>
  </div>
);


export default Header;
