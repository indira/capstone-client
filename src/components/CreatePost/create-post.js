import React, { useState, useContext } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Page from "../Page/Page"
import DispatchContext from "../../DispatchContext"
import StateContext from "../../StateContext"

function CreatePost(props) {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)

  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()

    if (!title.trim() || !body.trim()) {
      setError("Title and body are required.")
      return
    }

    try {
      const response = await axios.post("/create-post", {
        title,
        body,
        token: appState.user.token
      })
      if (response.data) {
        appDispatch({ type: "flashMessage", value: "Congratulations, you successfully created a post." })
        navigate(`/profile/${appState.user.username}`)
      }
    } catch (error) {
      setError("Something went wrong while creating post.")
      console.error("Error creating post:", error)
    }
  }

  return (
    <Page title="Create New Post">
      <div className="wrapper wrapper__border">
        <div className="container__home ">
          {appState.user.token ? (
            <>
              <h2 className="headline--large">Create new post.</h2>
              <form onSubmit={handleSubmit}>
                <label htmlFor="post-title">Title</label>
                <input onChange={e => setTitle(e.target.value)} autoFocus name="title" id="post-title" type="text" placeholder="" autoComplete="off" />
                <label htmlFor="post-body">Body Content</label>
                <textarea onChange={e => setBody(e.target.value)} name="body" id="post-body" type="text"></textarea>
                {error && <div className="invalid-feedback">{error}</div>}
                <button className="button button--white">Save New Post</button>
              </form>
            </>
          ) : (
            <div>
              <h2 className="container-home__title">Only registered users can create posts on the "Create Post" page.</h2>
            </div>
          )}
        </div>
      </div>
    </Page>
  )
}

export default CreatePost
