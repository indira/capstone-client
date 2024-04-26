import React, { useState, useContext } from "react"
import axios from "axios"
import DispatchContext from "../../DispatchContext"

function HeaderLoggedOut(props) {
  const appDispatch = useContext(DispatchContext)
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const response = await axios.post("/login", { username, password })
      if (response.data) {
        appDispatch({ type: "login", data: response.data })
      } else {
        console.log("Incorrect username /password.")
      }
    } catch (e) {
      setErrorMessage(e.response.data.message)
    }
  }
  return (
    <div>
      {errorMessage && <div className="invalid-feedback">{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <input autoFocus onChange={e => setUsername(e.target.value)} name="username" type="text" placeholder="Username" autoComplete="off" />
        <input onChange={e => setPassword(e.target.value)} name="password" type="password" placeholder="Password" />
        <button className="button button--blue button--blue-front">Sign In</button>
      </form>
    </div>
  )
}

export default HeaderLoggedOut
