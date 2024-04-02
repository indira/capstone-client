import React, { useEffect, useState } from "react"
import axios from "axios"
import { useParams, Link } from "react-router-dom"

function ProfilePosts() {
  const { username } = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axios.get(`/profile/${username}/posts`)
        console.log(response.data)
        setPosts(response.data)
        setIsLoading(false)
      } catch (e) {
        console.log("There was a problem or the request was cancelled.", e)
      }
    }
    fetchPosts()
  }, [username])

  if (isLoading) return <div className="Loading">Loading...</div>

  return (
    <div>
      {posts.map(post => {
        const date = new Date(post.created_at)
        const dateFormatted = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
        return (
          <div className="profile-container__posts" key={post.id}>
            <Link to={`/post/${post.id}`}>
              <div className="profile-container__posts-link">{post.title}</div>
            </Link>
            <span className="profile-container__posts-link"> {dateFormatted} </span>
          </div>
        )
      })}
    </div>
  )
}

export default ProfilePosts
