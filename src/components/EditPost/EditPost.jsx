import React, { useContext, useEffect, useState } from "react"
import Page from "../Page/Page"
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"
import StateContext from "../../StateContext"
import DispatchContext from "../../DispatchContext"

function EditPost() {
  const appState = useContext(StateContext)
  const appDispatch = useContext(DispatchContext)
  const { id } = useParams()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)
  const [post, setPost] = useState({ title: "", body: "" })

  useEffect(() => {
    const ourRequest = axios.CancelToken.source()
    async function fetchPost() {
      try {
        const response = await axios.get(`/post/${id}`, { cancelToken: ourRequest.token })
        setPost(response.data)
        setIsLoading(false)

        if (response.data) {
          if (appState.user.username !== response.data.username) {
            appDispatch({ type: "flashMessage", value: "You do not have permission to edit that post." })
            // redirect to homepage
            navigate("/")
          }
        } else {
          console.log("notFound")
        }
      } catch (e) {
        console.log("There was a problem or the request was cancelled.", e)
      }
    }
    fetchPost()
    return () => {
      ourRequest.cancel()
    }
  }, [id])

  const handleInputChange = event => {
    const { name, value } = event.target
    setPost({ ...post, [name]: value })
  }

  const handleSubmit = async event => {
    event.preventDefault()
    const ourRequest = axios.CancelToken.source()
    try {
      await axios.post(`/post/${id}/edit`, { title: post.title, body: post.body, token: appState.user.token }, { cancelToken: ourRequest.token })
      appDispatch({ type: "flashMessage", value: "Post was updated." })
      navigate(`/post/${id}`)
    } catch (error) {
      console.log("Error updating post:", error)
    }
    return () => {
      ourRequest.cancel()
    }
  }

  if (isLoading)
    return (
      <Page title="...">
        <div>...</div>
      </Page>
    )

  return (
    <Page title="Edit Post">
      <div className="wrapper wrapper__border">
        <div className="container-home ">
          <>
            <h2 className="container-home__title">Edit post</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="post-title">Title</label>
              <input onChange={handleInputChange} value={post.title} autoFocus name="title" id="post-title" type="text" placeholder="" autoComplete="off" />
              <label htmlFor="post-body">Body Content</label>
              <textarea onChange={handleInputChange} value={post.body} name="body" id="post-body" type="text" />
              <button className="button-white">Save Updates</button>
            </form>
          </>
        </div>
      </div>
    </Page>
  )
}

export default EditPost
