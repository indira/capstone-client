import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

function CreatePost() {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()
    console.log(title, body, localStorage.getItem("portfolioToken"))
    try {
      const response = await axios.post("/create-post", { title, body, token: localStorage.getItem("portfolioToken") })
      console.log(response.data)
      //Redirect to new post url
      navigate(`/post/${response.data}`)
    } catch (e) {
      console.log("Something went wrong while creating post.", e.response.data.message)
    }
  }
  return (
    <div className="wrapper wrapper__border">
      <div className="container-home ">
        <form onSubmit={handleSubmit}>
          <label htmlFor="post-title">Title</label>
          <input onChange={e => setTitle(e.target.value)} autoFocus name="title" id="post-title" type="text" placeholder="" autoComplete="off" />
          <label htmlFor="post-body">Body Content</label>
          <textarea onChange={e => setBody(e.target.value)} name="body" id="post-body" type="text"></textarea>
          <button className="button-white">Save New Post</button>
        </form>
      </div>
    </div>
  )
}

export default CreatePost
