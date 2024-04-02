import { Link } from "react-router-dom"
import HeaderLoggedOut from "./HeaderLoggedOut"
import HeaderLoggedIn from "./HeaderLoggedIn"
const Header = props => {
  return (
    <header>
      <div className="wrapper">
        <div className="site-header">
          <div className="site-header__logo">
            <Link to="/">Innovation Hub</Link>
          </div>
          <div className="site-header__elements">{props.loggedIn ? <HeaderLoggedIn setLoggedIn={props.setLoggedIn} /> : <HeaderLoggedOut setLoggedIn={props.setLoggedIn} />}</div>
        </div>
      </div>
    </header>
  )
}

export default Header
