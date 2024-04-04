import React, { useState } from "react"
import axios from "axios"

function HeaderLoggedOut(props) {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const response = await axios.post("/login", { username, password })
      console.log(response.data)
      if (response.data) {
        localStorage.setItem("portfolioToken", response.data.token)
        localStorage.setItem("portfolioUsername", response.data.username)
        localStorage.setItem("portfolioAvatar", response.data.avatar)
        props.setLoggedIn(true)
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
        <button>Sign In</button>
      </form>
    </div>
  )
}

export default HeaderLoggedOut
