import React, { useEffect, useContext } from "react"
import { Link } from "react-router-dom"
const HeaderLoggedIn = props => {
  const handleLogout = e => {
    e.preventDefault()
    props.setLoggedIn(false)
    localStorage.removeItem("portfolioToken")
    localStorage.removeItem("portfolioUsername")
    localStorage.removeItem("portfolioAvatar")
  }
  return (
    <>
      <div>
        <Link to="">
          <img className="site-header-avatar-small" src={localStorage.getItem("portfolioAvatar")} alt="avatar" />
        </Link>{" "}
        <Link to="/create-post">
          <button className="site-header-button-green">Create Post</button>
        </Link>{" "}
        <button onClick={handleLogout} className="site-header-site-button">
          Sign Out
        </button>
      </div>
    </>
  )
}

export default HeaderLoggedIn
