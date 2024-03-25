import React, { useEffect, useContext } from "react"
import { Link } from "react-router-dom"
const HeaderLoggedIn = props => {
  return (
    <>
      <div>
        <Link to="#" className="text-white mr-2 header-search-icon">
          <i className="fas fa-search"></i>
        </Link>{" "}
        <span className="mr-2 header-chat-icon text-white">
          <i className="fas fa-comment"></i>
          <span className="chat-count-badge text-white"> </span>
        </span>{" "}
        <Link to="" className="mr-2">
          <img className="header-avatar-small" src="" alt="avatar" />
        </Link>{" "}
        <Link className="btn btn-sm btn-success mr-2" to="/create-post">
          Create Post
        </Link>{" "}
        <button onClick={() => props.setLoggedIn(false)} className="btn btn-sm btn-secondary btn-marbot">
          Sign Out
        </button>
      </div>
    </>
  )
}

export default HeaderLoggedIn
