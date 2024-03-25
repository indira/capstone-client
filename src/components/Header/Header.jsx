import React, { useState } from "react"
import { Link } from "react-router-dom"
import HeaderLoggedOut from "./HeaderLoggedOut"
import HeaderLoggedIn from "./HeaderLoggedIn"
const Header = () => {
  const [loggedIn, setLoggedIn] = useState()
  return (
    <header>
      <div className="wrapper">
        <div className="site-header">
          <div className="site-header__logo">
            <Link to="/">Indira's Portfolio</Link>
          </div>
          <div className="site-header__elements">{loggedIn ? <HeaderLoggedIn setLoggedIn={setLoggedIn} /> : <HeaderLoggedOut setLoggedIn={setLoggedIn} />}</div>
        </div>
      </div>
    </header>
  )
}

export default Header
