import { API } from "../../src/axios"
import { useEffect } from "react"

const Home = () => {
  const fetchUsers = async () => {
    const response = await API.get("/users")
    const data = await response.data
    return data
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

  useEffect(() => {
    const users = fetchUsers()
    console.log(users)
  }, [])
  return (
    <>
      <div>hey</div>
    </>
  )
}

export default Home
