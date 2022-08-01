import { IRepoItem } from "../../interface/interface"
import { FaEye, FaInfo, FaStar, FaUtensils, FaLink } from "react-icons/fa"

export const RepoItem = ({ repo }: IRepoItem) => {
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = repo

  return (
    <div className="repo--container">
      <div className="repo--container__body">
        <h3 className="repo--container__body__namelink">
          <a href={html_url} target="_blank" rel = "noreferrer"className="linkDeco linkColor">
            <FaLink className="repo--container__body__linkicon" />
            {name}
          </a>
        </h3>
        <p className="repo--container__body__description">{description}</p>
        <div className="repo--container__body__downpart">
          <div className="repo--container__body__downpart__icon">
            <FaEye className="mr-2" />
            {watchers_count}
          </div>
          <div className="repo--container__body__downpart__icon star">
            <FaStar className="mr-2" />
            {stargazers_count}
          </div>
          <div className="repo--container__body__downpart__icon info">
            <FaInfo className="mr-2" />
            {open_issues}
          </div>
          <div className="repo--container__body__downpart__icon utensil">
            <FaUtensils className="mr-2" />
            {forks}
          </div>
        </div>
      </div>
    </div>
  )
}
