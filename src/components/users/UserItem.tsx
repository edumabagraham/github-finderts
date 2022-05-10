import { Link } from "react-router-dom";
import { Card } from "../layouts/Card";
import { IUser } from "../../interface/interface";


export const UserItem = ({ login, avatar_url }:IUser) => {
  return (
    <Card>
      <div className="user-info">
        <div>
          <img src={avatar_url} alt="Profile" className="avatar" />
        </div>
        <div className="name-link">
          <h2 className="user-name">{login}</h2>
          <Link to={`/user/${login}`} className="visit-profile">
            Visit Profile
          </Link>
        </div>
      </div>
    </Card>
  )
}