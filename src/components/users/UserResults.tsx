import { useState, useEffect } from "react"
import { API } from "../../axios"
import { UserItem } from "./UserItem"
import { Spinner } from "../layouts/Spinner"

export const UserResults = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchUsers = async () => {
    try {
      const response = await API.get("/users")
      const data = response.data
      setUsers(data)
      setLoading(false)
      //return data
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  if (!loading) {
    return (
      <div className="user-results">
        {users.map((user: any) => (
          <UserItem key={user.id} {...user} />
        ))}
      </div>
    )
  } else {
    return <div className="">
      <Spinner />
    </div>
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
