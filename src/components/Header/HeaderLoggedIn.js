import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import DispatchContext from "../../DispatchContext"
import StateContext from "../../StateContext"

const HeaderLoggedIn = props => {
  const navigate = useNavigate()
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)
  const handleLogout = e => {
    e.preventDefault()
    appDispatch({ type: "logout" })
    navigate(`/`)
  }
  return (
    <>
      <div>
        <Link to={`/profile/${appState.user.username}`}>
          <img className="site-header-avatar-small" src={appState.user.avatar} alt="avatar" />
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
