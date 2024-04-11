import { useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Axios from "axios"
import FlashMessages from "./components/FlashMessages/FlashMessages"
import Header from "./components/Header/Header"
import HomePage from "./Pages/HomePage/HomePage"
import { useImmerReducer } from "use-immer"
import Footer from "./components/footer/Footer"
import Home from "./components/Home/Home"
import CreatePost from "./components/CreatePost/create-post"
import ViewSinglePost from "./components/ViewSinglePost/ViewSinglePost"
import Profile from "./components/Profile/Profile"
import StateContext from "./StateContext"
import DispatchContext from "./DispatchContext"

//Calling the stylesheet
import "../src/Styles/App.scss"
Axios.defaults.baseURL = "http://localhost:8080"

function App() {
  const initialState = {
    loggedIn: Boolean(localStorage.getItem("portfolioToken")),
    flashMessages: [],
    user: {
      token: localStorage.getItem("IndiraSOFTToken"),
      username: localStorage.getItem("IndiraSOFTUsername"),
      avatar: localStorage.getItem("IndiraSOFTAvatar")
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
      localStorage.setItem("IndiraSOFTToken", state.user.token)
      localStorage.setItem("IndiraSOFTUsername", state.user.username)
      localStorage.setItem("IndiraSOFTAvatar", state.user.avatar)
    } else {
      localStorage.removeItem("IndiraSOFTToken")
      localStorage.removeItem("IndiraSOFTUsername")
      localStorage.removeItem("IndiraSOFTAvatar")
    }
  }, [state.loggedIn])

  return (
    <>
      <StateContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
          <BrowserRouter>
            <FlashMessages messages={state.flashMessages} />
            <Header />
            <Routes>
              <Route path="/" element={state.loggedIn ? <Home /> : <HomePage />} />
              <Route path="/post/:id" element={<ViewSinglePost />} />
              <Route path="/create-post" element={<CreatePost />} />
              <Route path="/profile/:username/*" element={<Profile />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </DispatchContext.Provider>
      </StateContext.Provider>
    </>
  )
}

export default App
