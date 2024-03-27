import React, { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Axios from "axios"
import Header from "./components/Header/Header"
import HomePage from "./Pages/HomePage/HomePage"
import Footer from "./components/footer/Footer"
import Home from "./components/Home/Home"
import CreatePost from "./components/CreatePost/create-post"

//Calling the stylesheet
import "../src/Styles/App.scss"
Axios.defaults.baseURL = "http://localhost:8080"

function App() {
  const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem("portfolioToken")))
  return (
    <>
      <BrowserRouter>
        <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Routes>
          <Route path="/" element={loggedIn ? <Home /> : <HomePage />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
