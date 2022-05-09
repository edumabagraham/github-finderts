import { FaHome } from "react-icons/fa"
import { Link } from "react-router-dom"

export const NotFound = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero--content">
          <h1 className="hero-title">Oops!</h1>
          <p className="hero-msg">404 - Page not found!</p>
          <Link to="/" className="not-found-link ">
            <FaHome className="home-icon" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
