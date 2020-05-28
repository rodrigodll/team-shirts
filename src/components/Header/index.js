import React, { useEffect, useState } from "react";
import "./Header.scss";
import Search from "../Search";
import ColorMode from "../ColorMode";
import logo from "../../logo.png";

export default({data, filterText, filterUpdate, ChangeTheme}) => {

  const [showSearch, showModal] = useState(false)

  useEffect(() => {
    console.log(showSearch, showModal)
  }, [])

  const openModal = () =>{
    console.log(showSearch, showModal)

    if(showSearch) {
      alert('sim')
    } else {
      alert('nao')
    }
  }
  


  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <a href="/">
            <img src={logo} className="header__logo" width="120" alt=""/>
          </a>

          <Search
            className="d-none"
            filterText={filterText}
            filterUpdate={filterUpdate}
          />

          <button className="header__search" onClick={openModal}>
            button
          </button>

          <ColorMode ChangeTheme={ChangeTheme}/>
        </div>
      </div>
    </div>
  )
}