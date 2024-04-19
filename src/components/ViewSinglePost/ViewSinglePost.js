import React, { useContext, useEffect, useState } from "react"
import Page from "../Page/Page"
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import StateContext from "../../StateContext"
import DispatchContext from "../../DispatchContext"
import ReactMarkdown from "react-markdown"
import { Tooltip as ReactTooltip } from "react-tooltip"

function ViewSinglePost() {
  const appState = useContext(StateContext)
  const appDispatch = useContext(DispatchContext)
  const { id } = useParams()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)
  const [post, setPost] = useState()

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await axios.get(`/post/${id}`)
        //console.log(response.data)
        setPost(response.data)
        setIsLoading(false)
      } catch (e) {
        console.log("There was a problem or the request was cancelled.", e)
      }
    }
    fetchPost()
  }, [id])

  async function deleteHandler() {
    const areYouSure = window.confirm("Do you really want to delete this post?")
    if (areYouSure) {
      try {
        const response = await axios.delete(`/post/${id}`, { data: { token: appState.user.token } })
        if (response.data === "Success") {
          // 1. display a flash message
          appDispatch({ type: "flashMessage", value: "Post was successfully deleted." })
          navigate(`/profile/${appState.user.username}`)
        }
      } catch (e) {
        console.log(e)
      }
    }
  }
  if (isLoading)
    return (
      <Page title="...">
        <div>...</div>
      </Page>
    )
  const date = new Date(post.updated_at)
  const dateFormatted = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`

  function isOwner() {
    if (appState.loggedIn) {
      return appState.user.username === post.username
    }
    return false
  }
  return (
    <Page title={post.title}>
      <div className="wrapper wrapper__border">
        <div className="container-home ">
          <div className="VSinglePost-container">
            <div className="VSinglePost-container__header ">
              <h2>{post.title}</h2>
              <div>
                {isOwner() && (
                  <React.Fragment>
                    <Link to={`/post/${post.id}/edit`} data-tooltip-content="Edit" data-tooltip-id="edit">
                      <i className="fas fa-edit"></i>{" "}
                    </Link>
                    <Link data-tooltip-content="Delete" data-tooltip-id="delete" onClick={deleteHandler}>
                      {" "}
                      <i className="fas fa-trash-alt delete"></i>
                    </Link>
                    <ReactTooltip id="edit" />
                    <ReactTooltip id="delete" />
                  </React.Fragment>
                )}
              </div>
            </div>
            <div className="VSinglePost-container__info">
              <Link to={`/profile/${post.username}`}>
                <img className="VSinglePost-container__info-avatar" src={post.avatar} alt="avatar" />
              </Link>
              Posted by{" "}
              <Link to={`/profile/${post.username}`}>
                <strong>{post.username}</strong>
              </Link>{" "}
              on {dateFormatted}
            </div>
            <div className="VSinglePost-container__body">
              <ReactMarkdown children={post.body} allowedElements={["p", "strong", "em", "a", "h1", "h2", "h3", "h4", "h5", "h6", "ul", "ol", "li"]} />
            </div>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default ViewSinglePost
