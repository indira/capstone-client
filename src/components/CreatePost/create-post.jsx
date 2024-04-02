import React, { useState } from "react"
import axios from "axios"
import Page from "../Page/Page"

function CreatePost() {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const token = localStorage.getItem("portfolioToken")
  const handleSubmit = async e => {
    e.preventDefault()
    console.log(title, body, localStorage.getItem("portfolioToken"))
    try {
      const response = await axios.post("/create-post", { title, body, token: token })
    } catch (e) {
      console.log("Something went wrong while creating post.", e.response.data.message)
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
