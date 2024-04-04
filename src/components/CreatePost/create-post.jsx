import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Page from "../Page/Page"

function CreatePost() {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const token = localStorage.getItem("portfolioToken")

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
        token: token
      })

      if (response.data) {
        navigate(`/profile/${localStorage.getItem("portfolioUsername")}`)
      }
    } catch (error) {
      setError("Something went wrong while creating post.")
      console.error("Error creating post:", error)
    }
  }

  return (
    <Page title="Create New Post">
      <div className="wrapper wrapper__border">
        <div className="container-home ">
          {token ? (
            <>
              <h2 className="container-home__title">Create new post.</h2>
              <form onSubmit={handleSubmit}>
                <label htmlFor="post-title">Title</label>
                <input onChange={e => setTitle(e.target.value)} autoFocus name="title" id="post-title" type="text" placeholder="" autoComplete="off" />
                <label htmlFor="post-body">Body Content</label>
                <textarea onChange={e => setBody(e.target.value)} name="body" id="post-body" type="text"></textarea>
                {error && <div className="invalid-feedback">{error}</div>}
                <button className="button-white">Save New Post</button>
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
