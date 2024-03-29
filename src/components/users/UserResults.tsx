import { useEffect, useContext } from "react"
import { UserItem } from "./UserItem"
import { Spinner } from "../layouts/Spinner"
import GithubContext from "../../context/github/GithubContext"

export const UserResults = () => {
  const { users, loading } = useContext(GithubContext)
  useEffect(()=>{
  },)
  if (!loading) {
    return (
      <div className="user-results">
        {users.map((user: any) => (
          <UserItem key={user.id} {...user} />
        ))}
      </div>
    )
  } else {
    return (
      <div>
        <Spinner />
      </div>
    )
  }
}

