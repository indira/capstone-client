import React, { useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Axios from "axios"
import FlashMessages from "./components/FlashMessages/FlashMessages"
import Header from "./components/Header/Header"
import HomePage from "./Pages/HomePage/HomePage"
import { useImmerReducer } from "use-immer"
import Footer from "./components/footer/Footer"
import CreatePost from "./components/CreatePost/create-post"
import ViewSinglePost from "./components/ViewSinglePost/ViewSinglePost"
import Profile from "./components/Profile/Profile"
import StateContext from "./StateContext"
import DispatchContext from "./DispatchContext"
import EditPost from "./components/EditPost/EditPost"
import AboutMe from "./components/AboutMe/AboutMe"
import Home from "./components/Home/HomeGuest"
import Register from "./components/Register/Register"
import Portfolio from "./components/Portfolio/Portfolio"

//Calling the stylesheet
import "../src/Styles/App.scss"

//Axios.defaults.baseURL = "http://localhost:8080"
Axios.defaults.baseURL = "https://innovationhub-29c6147b54b8.herokuapp.com/"

function App() {
  const initialState = {
    loggedIn: Boolean(localStorage.getItem("portfolioToken")),
    flashMessages: [],
    user: {
      token: localStorage.getItem("portfolioToken"),
      username: localStorage.getItem("portfolioUsername"),
      avatar: localStorage.getItem("portfolioAvatar")
    }
  }

  function ourReducer(draft, action) {
    switch (action.type) {
      case "login":
        draft.loggedIn = true
        draft.user = action.data
        return
      case "logout":
        draft.loggedIn = false
        return
      case "flashMessage":
        draft.flashMessages.push(action.value)
        return
      default:
        return
    }
  }

  const [state, dispatch] = useImmerReducer(ourReducer, initialState)
  useEffect(() => {
    if (state.loggedIn) {
      localStorage.setItem("portfolioToken", state.user.token)
      localStorage.setItem("portfolioUsername", state.user.username)
      localStorage.setItem("portfolioAvatar", state.user.avatar)
    } else {
      localStorage.removeItem("portfolioToken")
      localStorage.removeItem("portfolioUsername")
      localStorage.removeItem("portfolioAvatar")
    }
  }, [state.loggedIn, state.user.token, state.user.username, state.user.avatar])

  return (
    <>
      <StateContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
          <BrowserRouter>
            <FlashMessages messages={state.flashMessages} />
            <Header />
            <Routes>
              <Route path="/" element={state.loggedIn ? <Home /> : <HomePage />} />
              <Route path="/create-post" element={<CreatePost />} />
              <Route path="/profile/:username/*" element={<Profile />} />
              <Route path="/post/:id" element={<ViewSinglePost />} />
              <Route path="/post/:id/edit" element={<EditPost />} />
              <Route path="/aboutme" element={<AboutMe />} />
              <Route path="/register" element={<Register />} />
              <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </DispatchContext.Provider>
      </StateContext.Provider>
    </>
  )
}

export default App
