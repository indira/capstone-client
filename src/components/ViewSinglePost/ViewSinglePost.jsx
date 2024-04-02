import React, { useEffect, useState } from "react"
import Page from "../Page/Page"
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"

function ViewSinglePost() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [post, setPost] = useState("")

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await axios.get(`/post/${id}`)
        setPost(response.data)
      } catch (e) {
        console.log("There was a problem or the request was cancelled.", e)
      }
    }
    fetchPost()
  }, [])

  async function deleteHandler() {
    const areYouSure = window.confirm("Do you really want to delete this post?")
    if (areYouSure) {
      try {
        const response = await axios.delete(`/post/${id}`, { data: { token: localStorage.getItem("portfolioToken") } })
        if (response.data == "Success") {
          navigate(`/profile/${localStorage.getItem("portfolioUsername")}`)
        }
      } catch (e) {
        console.log(e)
      }
    }
  }
  return (
    <Page title={post.title}>
      <div className="wrapper wrapper__border">
        <div className="container-home ">
          <div className="profile-container__posts-actions">
            <a onClick={deleteHandler} className="delete">
              <i className="fas fa-trash-alt"></i>
            </a>
          </div>
          <h2 className="container-home__header">{post.title}</h2>
          <div className="container-home__body">{post.body}</div>
        </div>
      </div>
    </Page>
  )
}

export default ViewSinglePost
