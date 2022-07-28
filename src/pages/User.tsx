import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useContext, useEffect } from "react"
import GithubContext from "../context/github/GithubContext"
import { useParams } from "react-router-dom"
import { Spinner } from "../components/layouts/Spinner"

export const User = () => {
  const { user, loading, getSingleUser, setLoading } = useContext(GithubContext)
  const params = useParams()

  useEffect(() => {
    getSingleUser(params.login!) //the ! sign used here tells ts that even though the argument looks like it could be undefined, it can trust you that it's not
  }, [])

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    blog,
    hireable,
  } = user

  if (loading) {
    return <Spinner />
  }
  return (
    <>
      <div className="user--container">
        <div className="mb-4">
          <Link to="/" className="btn btn-ghost">
            Back to Search
          </Link>
        </div>

        <div className="main">
          <div className="img_container">
            <figure>
              <img src={avatar_url} alt="img" className="img--container__img" />
            </figure>
            <div className="img--container__caption">
              <h2 className="img--container__caption--head">{name}</h2>
              <p className="img--container__caption--tail">{login}</p>
            </div>
          </div>

          <div className="user--info">
            <div className="mb-6">
              <h1 className="user--info__name">
                {name}
                <div className="user--info__type">{type}</div>
                {hireable && (
                  <div className="user--info__type hireable">Hireable</div>
                )}
              </h1>
              <p className="user--info__bio">{bio}</p>
              <div className="user--info__link">
                <a
                  href={html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="user--info__link--btn"
                >
                  {" "}
                  Visit Github Profile
                </a>
              </div>
            </div>

            <div className="user--stats">
              {location && (
                <div className="stat">
                  <div className="user--stats__stat--title">Location</div>
                  <div className="user--stats__stat--value">{location}</div>
                </div>
              )}
              {blog && (
                <div className="stat">
                  <div className="user--stats__stat--title">Website</div>
                  <div>
                    <a
                      href={`https://${blog}`}
                      target="_blank"
                      rel="noreferrer"
                      className="user--stats__stat--value"
                    >
                      {blog}
                    </a>
                  </div>
                </div>
              )}
              {twitter_username && (
                <div className="stat">
                  <div className="user--stats__stat--title">Twitter</div>
                  <div>
                    <a
                      href={`https://twitter.com/${twitter_username}`}
                      target="_blank"
                      rel="noreferrer"
                      className="user--stats__stat--value"
                    >
                      {twitter_username}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="user--stats--two">
          <div className="stat bottom">
            <div className="stat--figure">
              <FaUsers className="stat--figure__icon" />
            </div>
            <div className="stat--figure__name">Followers</div>
            <div className="stat--figure__number">{followers}</div>
          </div>

          <div className="stat bottom">
            <div className="stat--figure">
              <FaUserFriends className="stat--figure__icon" />
            </div>
            <div className="stat--figure__name">Following</div>
            <div className="stat--figure__number">{following}</div>
          </div>

          <div className="stat ">
            <div className="stat--figure">
              <FaCodepen className="stat--figure__icon" />
            </div>
            <div className="stat--figure__name">Public Repos</div>
            <div className="stat--figure__number">{public_repos}</div>
          </div>

          <div className="stat bottom">
            <div className="stat--figure">
              <FaStore className="stat--figure__icon" />
            </div>
            <div className="stat--figure__name">Public Gists</div>
            <div className="stat--figure__number">{public_gists}</div>
          </div>
        </div>
      </div>
    </>
  )
}
