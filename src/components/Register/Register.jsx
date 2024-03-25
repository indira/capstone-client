import React, { useState } from "react"
import axios from "axios"
const Register = () => {
  const [username, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const body = {
    username,
    email,
    password
  }

  const handleSubmit = async e => {
    e.preventDefault(e)
    console.log(body)
    try {
      const response = await axios.post("http://localhost:8080/register", body)
      console.log(response.body)
      console.log("Register")
    } catch (e) {
      console.log("There was in error in form submission", e)
    }
  }

  return (
    <>
      <div className="container">
        <div className="container__description">
          <h4 className="container__description--title">Register here!</h4>
          <p className="container__description--paragraph">"Welcome to this hub designed for like-minded individuals. Let's come together to share our knowledge and learn from one another."</p>
        </div>
        <div className="container__form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="username-register">
              <small>Username</small>
            </label>
            <input onChange={e => setUserName(e.target.value)} id="username-register" name="username" type="text" placeholder="Pick a username" autoComplete="off" />
            <label htmlFor="email-register" className="text-muted mb-1">
              <small>Email</small>
            </label>
            <input onChange={e => setEmail(e.target.value)} id="email-register" name="email" type="text" placeholder="you@example.com" autoComplete="off" />

            <label htmlFor="password-register" className="text-muted mb-1">
              <small>Password</small>
            </label>
            <input onChange={e => setPassword(e.target.value)} id="password-register" name="password" className="form-control" type="password" placeholder="Create a password" />

            <button type="submit">Sign up</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register
