import React, { useEffect } from "react"
import Page from "../Page/Page"

function ViewSinglePost() {
  return (
    <Page title={`This is sample`}>
      <div className="wrapper wrapper__border">
        <div className="container-home ">
          <h2>Example Post title</h2>
          <body>This is a body</body>
        </div>
      </div>
    </Page>
  )
}

export default ViewSinglePost
