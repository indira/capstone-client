import React from "react"
import Page from "../Page/Page"
function Home() {
  return (
    <Page title="Your Feed">
      <div className="wrapper  wrapper__border">
        <div className="container__home">
          <h2 className="headline--large">Hello {localStorage.getItem("portfolioUsername")}, Welcome to our platform!</h2>
          <p>Share your stories easily on our platform's user-friendly interface, perfect for writers of all levels.</p>
        </div>
      </div>
    </Page>
  )
}

export default Home
