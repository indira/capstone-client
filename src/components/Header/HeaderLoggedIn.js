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
          <img className="headline-avatar-large" src={appState.user.avatar} alt="avatar" />
        </Link>{" "}
        <Link to="/create-post">
          <button className="button button--green">Create Post</button>
        </Link>{" "}
        <button onClick={handleLogout} className="button button--blue">
          Sign Out
        </button>
      </div>
    </>
  )
}

export default HeaderLoggedIn
