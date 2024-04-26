import React, { useEffect, useState, useContext } from "react"
import Page from "../Page/Page"
import Axios from "axios"
import { useParams } from "react-router-dom"
import ProfilePosts from "./ProfilePosts"
import StateContext from "../../StateContext"

function Profile() {
  const appState = useContext(StateContext)
  const { username } = useParams()
  const [profileData, setProfileData] = useState({
    profileUsername: "...",
    profileAvatar: "https://gravatar.com/avatar/placeholder?s=128",
    counts: { postCount: "" }
  })
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await Axios.get(`/profile/${username}`, { token: appState.user.token })
        setProfileData(response.data)
      } catch (e) {
        console.log("Sorry, something went wrong in profile.")
      }
    }
    fetchData()
  }, [appState.user.token, username])

  return (
    <Page title="Profile Screen">
      <div className="wrapper wrapper__border">
        <div className="profile-container">
          <div className="profile-container__header">
            <h2 className="">
              <img className="headline-avatar" src={profileData.profileAvatar} alt="avatar" />
              {profileData.profileUsername}
            </h2>
            <div >No of posts: <span className="profile-container__header-no">{profileData.counts.postCount}</span></div>
          </div>
          <ProfilePosts />
        </div>
      </div>
    </Page>
  )
}

export default Profile
