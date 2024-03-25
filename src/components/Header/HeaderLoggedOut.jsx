import React, { useState } from "react"
import axios from "axios"

function HeaderLoggedOut(props) {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const body = {
    username,
    password
  }
  const handleSubmit = async e => {
    e.preventDefault()
    //console.log(body)
    try {
      const response = await axios.post("http://localhost:8080/login", { body })
      if (response.data) {
        props.setLoggedIn(true)
        console.log(response.data)
      } else {
        console.log("Incorrect username /password.")
      }
    } catch (e) {
      console.log("Something went wrong in login", e)
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input onChange={e => setUsername(e.target.value)} name="username" type="text" placeholder="Username" autoComplete="off" />
      <input onChange={e => setPassword(e.target.value)} name="password" type="password" placeholder="Password" />
      <button>Sign In</button>
    </form>
  )
}

export default HeaderLoggedOut