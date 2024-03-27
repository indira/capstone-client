import React from "react"

function CreatePost() {
  return (
    <div className="wrapper wrapper__border">
      <div className="container-home ">
        <form>
          <label htmlFor="post-title">Title</label>
          <input autoFocus name="title" id="post-title" type="text" placeholder="" autoComplete="off" />
          <label htmlFor="post-body">Body Content</label>
          <textarea name="body" id="post-body" type="text"></textarea>
          <button className="button-white">Save New Post</button>
        </form>
      </div>
    </div>
  )
}

export default CreatePost
