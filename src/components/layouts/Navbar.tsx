import { FaGithub } from "react-icons/fa"
import { Link } from "react-router-dom"
import { INavbar } from "../../interface/interface"

export const Navbar: React.FC<INavbar> = ({ title }) => {
  return (
    <nav className="navbar">
      <div className="nav_container">
        <div className="__navbar">
          <FaGithub className="github_icon" />
          {/* <Link to="/" className="title">
            {title}
          </Link> */}
        </div>

        <div className="home_about">
          {/* <Link to="/" className="btn-ghost">
            HOME
          </Link>
          <Link to="/about" className="btn-ghost">
              ABOUT
          </Link> */}
        </div>
      </div>
    </nav>
  )
}
