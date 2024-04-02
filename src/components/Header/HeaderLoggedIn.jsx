import React from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
const HeaderLoggedIn = props => {
  const navigate = useNavigate()
  const handleLogout = e => {
    e.preventDefault()
    props.setLoggedIn(false)
    localStorage.removeItem("portfolioToken")
    localStorage.removeItem("portfolioUsername")
    localStorage.removeItem("portfolioAvatar")
    navigate(`/`)
  }
  return (
    <>
      <div>
        <Link to={`/profile/${localStorage.getItem("portfolioUsername")}`}>
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
