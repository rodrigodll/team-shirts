import React from "react";
import "./Header.scss";
import Search from "../Search";
import ColorMode from "../ColorMode";
import logo from "../../logo.png";

export default({data, filterText, filterUpdate, ChangeTheme}) => {

  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <a href="/team-shirts">
            <img src={logo} className="header__logo" width="120" alt=""/>
          </a>

          <Search
            className="d-none"
            filterText={filterText}
            filterUpdate={filterUpdate}
          />

          <button className="header__search">
            button
          </button>

          <ColorMode ChangeTheme={ChangeTheme}/>
        </div>
      </div>
    </div>
  )
}