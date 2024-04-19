import React, { useContext } from "react"
import { Link } from "react-router-dom"
import HeaderLoggedOut from "./HeaderLoggedOut"
import HeaderLoggedIn from "./HeaderLoggedIn"
import StateContext from "../../StateContext"

const Header = props => {
  const appState = useContext(StateContext)
  return (
    <header>
      <div className="wrapper">
        <div className="site-header">
          <div className="site-header__logo">
            <Link to="/">Innovation Hub</Link>
          </div>
          <div className="site-header__elements">{appState.loggedIn ? <HeaderLoggedIn /> : <HeaderLoggedOut />}</div>
        </div>
      </div>
    </header>
  )
}

export default Header
