import React, { useState } from "react"
import axios from "axios"
import Page from "../Page/Page"

const Register = () => {
  const [username, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({})
  const [registrationSuccess, setRegistrationSuccess] = useState(false)
  const [registrationError, setRegistrationError] = useState(" ")

  const validateForm = () => {
    const errors = {}

    // Username validation
    if (!username.trim()) {
      errors.username = "Username is required"
    } else if (username.length < 3) {
      errors.username = "Username must be at least 3 characters long"
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email.trim()) {
      errors.email = "Email is required"
    } else if (!emailRegex.test(email)) {
      errors.email = "Invalid email address"
    }

    // Password validation
    if (!password.trim()) {
      errors.password = "Password is required"
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters long"
    }

    setErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if (validateForm()) {
      try {
        const response = await axios.post("/register", { username, email, password })
        if (response.data) {
          setRegistrationSuccess(true)
        }
      } catch (e) {
        setRegistrationError(e.response.data.message)
      }
    }
  }

  return (
    <Page title="RegisterHome">
      <div className="container">
        <div className="container__left">
          <h4 className="container__left--title">Register here!</h4>
          <p className="container__left--paragraph">"Register here to become a member and share your thoughts and ideas on the app."</p>
        </div>
        <div className="container__right">
          {registrationSuccess && <div className="container__form-success-message">Registration successful!</div>}
          {registrationError && <div className="invalid-feedback">{registrationError}</div>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username-register">
                <small>Username</small>
              </label>
              <input onChange={e => setUserName(e.target.value)} id="username-register" name="username" type="text" className={`form-control ${errors.username ? "is-invalid" : ""}`} placeholder="Pick a username" autoComplete="off" />
              {errors.username && <div className="invalid-feedback">{errors.username}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="email-register" className="text-muted mb-1">
                <small>Email</small>
              </label>
              <input onChange={e => setEmail(e.target.value)} id="email-register" name="email" type="text" className={`form-control ${errors.email ? "is-invalid" : ""}`} placeholder="you@example.com" autoComplete="off" />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="password-register" className="text-muted mb-1">
                <small>Password</small>
              </label>
              <input onChange={e => setPassword(e.target.value)} id="password-register" name="password" className={`form-control ${errors.password ? "is-invalid" : ""}`} type="password" placeholder="Create a password" />
              {errors.password && <div className="invalid-feedback">{errors.password}</div>}
            </div>

            <button className="button button--white" type="submit">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </Page>
  )
}

export default Register
