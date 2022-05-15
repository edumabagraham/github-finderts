import { createContext, useState } from "react"
import { IChildren } from "../../interface/interface"
import { API } from "../../axios"

const defaultValues: object = {
  users: [],
  user: {},
  loading: false,
}

const GithubContext = createContext(defaultValues)

export const GithubProvider = ({ children }: IChildren) => {
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

  return (
    <GithubContext.Provider
      value={{
        fetchUsers,
        users,
        loading,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}
