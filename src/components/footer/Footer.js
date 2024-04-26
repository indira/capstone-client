import React from "react"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="footer wrapper">
      <p>
        <Link to="/">Home</Link> | <Link to="/aboutme">About Me</Link> | <Link to="/portfolio">Portfolio</Link>
      </p>
      <p className="footer__text">
        Copyright &copy; {new Date().getFullYear() + " "}
        <Link to="/">Indira's Portfolio</Link>. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
