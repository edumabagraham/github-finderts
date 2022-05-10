import { useState, useEffect } from "react"
import { API } from "../../axios"
import { UserItem } from "./UserItem"

export const UserResults = () => {
  const [users, setUsers] = useState([])

  const fetchUsers = async () => {
    try {
      const response = await API.get("/users")
      const data = response.data
      setUsers(data)
      return data
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])
  return (
    <div className="user-results">
      {users.map((user: any) => (
        <UserItem key={user.id} {...user} />
      ))}
    </div>
  )
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
