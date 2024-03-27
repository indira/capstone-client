import React, { useEffect } from "react"

function Home() {
  return (
    <>
      <div className="wrapper  wrapper__border">
        <div className="container-home">
          <h2 className="container-home__header">Hello {localStorage.getItem("portfolioUsername")}, Welcome to our platform!</h2>
          <p className="text-muted text-center">Share your stories easily on our platform's user-friendly interface, perfect for writers of all levels.</p>
        </div>
      </div>
    </>
  )
}

export default Home
