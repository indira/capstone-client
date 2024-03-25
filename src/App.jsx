import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import HomePage from "./Pages/HomePage/HomePage"
import Footer from "./components/footer/Footer"

//Calling the stylesheet
import "../src/Styles/App.scss"
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
