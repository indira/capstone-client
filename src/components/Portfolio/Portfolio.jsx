import React from "react"
import Page from "../../components/Page/Page"

function Portfolio() {
  return (
    <Page title="Portfolio">
      <div className="wrapper__border">
        <div className="container">
          <div className="container__left container__left--portfolio wrapper ">
            <h2 className="headline--exlarge">Indira Pandey</h2>
            <h3 className="headline--large">
              Full Stack Developer{"  |  "}
              <a href="https://www.linkedin.com/in/indira-pandey/" target="_blank" rel="noreferrer">
                <strong> LinkedIn</strong>
              </a>
              {" | "}
              <a href="https://github.com/Indira" target="_blank" rel="noreferrer">
                <strong>Github</strong>
              </a>
            </h3>
            <hr></hr>
            <h3 className="headline--large"> P R O F I L E</h3>
            <p>Detail-oriented software engineer with expertise in interactive web applications and backend systems. Skilled in Node.js, Express.js, and MySQL, with proficiency in React, JavaScript, HTML, CSS, Sass, Bootstrap, and Webpack. Experienced in project management using JIRA and collaborative development with GitHub.</p>
            <hr></hr>
            <h3 className="headline--large"> S K I L L S</h3>
            <span className="headline--medium">
              <strong>Proficient in:</strong>
            </span>
            <p> React, Node.js, REST APIs, Express.js, JavaScript, HTML, CSS/SASS, WordPress CMS, Git, Jira, and Agile Development.</p>
            <hr></hr>
            <h3 className="headline--large">E D U C A T I O N</h3>
            <h3 className="headline--medium"> BrainStation | Diploma, Software Engineering </h3>
            <h5 className="headline--muted">JAN 2024 - APR 2024, VANCOUVER, BC</h5>
            <h3 className="headline--medium"> Master’s Degree in Information Technology | Kobe University </h3>
            <h5 className="headline--muted">APR 2007 – APR 2009 (Rotary Yoneyama Memorial Foundation Fellow)</h5>
            <h3 className="headline--medium"> Research Student | Kobe University </h3>
            <h5 className="headline--muted">APR 2005 – APR 2006</h5>
            <h3 className="headline--medium"> Bachelor of Computer Engineering | Pokhara University</h3>
            <h5 className="headline--muted">SEP 2000 – SEP 2004</h5>
            <hr></hr>
            <h3 className="headline--medium"> Professional Courses (Part-time)</h3>
            <h5 className="headline--medium">
              <strong>Udemy</strong>
            </h5>
            <p>Git a Web Developer Job | MAR 2022 – AUG 2022</p>
            <a href="https://indira.github.io/travel-site" target="_blank" rel="noreferrer">
              <h2>https://indira.github.io/travel-site</h2>
            </a>
            <p></p>
            <h5 className="headline--medium">
              <strong>BCIT, Vancouver, BC</strong>
            </h5>
            <ul>
              <li>
                <p>Intro to JavaScript and jQuery (COMP 2015) | FEB 2016 – APR 2016 </p>
              </li>
              <li>
                {" "}
                <p>Java Application Development (COMP 2613) | JAN 2016 – APR 2016</p>
              </li>
              <li>
                {" "}
                <p>SQL Server 2008 Administration (COMP 4677) | JAN 2013 – APR 2013</p>
              </li>
              <li>
                {" "}
                <p>Relational Database Design and SQL (COMP 1630) | JAN 2012 – MAR 2012</p>
              </li>
            </ul>
          </div>
          <div className="container__right">
            <h3 className="headline--large">E X P E R I E N C E </h3>
            <hr></hr>
            <h3 className="headline--medium"> Indira Soft | (Self-Employed) </h3>
            <h5 className="headline--muted">SEP 2022 – DEC 2023, VANCOUVER, BC</h5>
            <ul>
              <li>
                <p>Developed a data processing software for the Earthquake Engineering Research Facility (EERF) of University of British Columbia (UBC) that allows comparing the properties of earthquake records of bridges with graphical data visualization.</p>
              </li>
              <li>
                <p>Worked as a consultant to organize the IOMAC 2022 conference papers into a PDF bundle file.</p>
              </li>
              <li>
                {" "}
                <p>
                  Designed and developed a website for the EWBI Canada using the WordPress CMS.{" "}
                  <a href="https://www.ewbi-canada.org" target="_blank" rel="noreferrer">
                    <h3> https://www.ewbi-canada.org</h3>
                  </a>
                </p>
              </li>
            </ul>

            <h3 className="headline--medium"> Web Developer | CAEE </h3>
            <h5 className="headline--muted">JAN 2013 – SEP 2022, VANCOUVER, BC</h5>
            <ul>
              <li>
                {" "}
                <p>Crafted and implemented a responsive website for the Canadian Association for Earthquake Engineering (CAEE) utilizing WordPress.</p>
              </li>
              <li>
                <p>
                  Constructed a search engine for Conference Proceedings spanning eleven conferences, optimizing accessibility and user experience.{" "}
                  <a href="https://www.caee.ca/conferenceproceedings/" target="_blank" rel="noreferrer">
                    <h3> https://www.caee.ca/conferenceproceedings</h3>
                  </a>
                </p>
              </li>
            </ul>
            <h3 className="headline--medium"> Software Developer| PBRV Consulting </h3>
            <h5 className="headline--muted">SEP 2016 – JUL 2017, VANCOUVER, BC</h5>
            <ul>
              <li>
                {" "}
                <p>Developed a user account login system in WordPress for customized client accounts.</p>
              </li>
              <li>
                {" "}
                <p>Created a backend tool for computing site-specific risk to hazard, including data analysis.</p>
              </li>
            </ul>
            <h3 className="headline--medium"> Webcast Coordinator (Part Time) </h3>
            <h5 className="headline--muted">JAN 2014 – JUL 2016, VANCOUVER, BC</h5>
            <ul>
              <li>
                <p>Coordinated live webcasts of engineering courses.</p>
              </li>
            </ul>
            <h3 className="headline--medium"> Software Developer (Consultant) | Department of Civil Engineering, UBC </h3>
            <h5 className="headline--muted">SEP 2011 – MAY 2015, VANCOUVER, BC</h5>

            <ul>
              <li>
                {" "}
                <p>Project I: Risk and Hazard Earthquake Analysis, Standalone Software </p>
              </li>
              <li>
                {" "}
                <p>Project II: Seismic Signal Processing, Standalone Software</p>
              </li>
              <li>
                <p>Project III: Website Development SSI Program</p>
              </li>
              <li>
                <p>Project IV: Website Development </p>
              </li>
            </ul>
            <h3 className="headline--medium">
              {" "}
              Software Developer | <a href="https://innovationhub1.netlify.app/"><strong>Login System/Portfolio</strong></a>
            </h3>
            <h5 className="headline--muted">MAR 2024, Capstone Project | React, HTML, Sass, Node JS, Express, MySQL</h5>

            <ul>
              <li>
                {" "}
                <p>Designed and implemented a dynamic login system enabling user registration and interaction through post creation </p>
              </li>
              <li>
                {" "}
                <p>Utilized Express.js framework to streamline server-side development, optimizing routing and middleware for enhanced functionality.</p>
              </li>
              <li>
                {" "}
                <p>Utilized MySQL database management to securely store and manage user information, prioritizing data integrity and privacy.</p>
              </li>
              <li>
                <p>Leveraged Node.js to create scalable and high-performance backend solutions, ensuring seamless user experiences. </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default Portfolio
