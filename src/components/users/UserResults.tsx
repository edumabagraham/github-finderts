import { useEffect, useContext } from "react"
import { UserItem } from "./UserItem"
import { Spinner } from "../layouts/Spinner"
import GithubContext from "../../context/github/GithubContext"

export const UserResults = () => {
  const { users, loading,fetchUsers } = useContext(GithubContext)

  useEffect(() => {
    fetchUsers()
  },[])
  

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
      <div className="">
        <Spinner />
      </div>
    )
  }
}

//   const fetchUsers = async () => {
//     const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}`, {
//       headers: {
//         Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
//       },
//     })
//     const data = await response.json()
//     return data
//   }
