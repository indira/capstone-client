import React, { useEffect, useState } from "react"
import { Axios } from "axios"
import { useParams } from "react-router-dom"

function ProfilePosts() {
  const [isLoading, setIsLoading] = useState(true)
  const [posts, setPosts] = useState([])
  const { username } = useParams()

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await Axios.get(`/profile/${username}/posts`)
        setPosts(response.data)
        setIsLoading(false)
      } catch (e) {
        console.log("Sorry, something went wrong in posts.")
      }
    }
    fetchPosts()
  }, [])

  //if (isLoading) return <div className="Loading">Loading...</div>
  return (
    <div className="profile-container__posts">
      <p className="profile-container__posts-link">This is a sample post.</p>
      <div className="profile-container__posts-actions">
        <span className="edit">
          <i className="fas fa-edit"></i>
        </span>
        <span className="delete">
          <i className="fas fa-trash-alt"></i>
        </span>
      </div>
    </div>
  )
}

export default ProfilePosts
