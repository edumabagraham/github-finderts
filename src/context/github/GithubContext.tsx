import { createContext, useReducer } from "react"
import { IChildren, IGithubContext } from "../../interface/interface"
import { API } from "../../axios"
import githubReducer from "./GithubReducer"

const defaultValues = {
  users: [],
  loading: true,
  fetchUsers: () => {},
  searchUsers: () => {},
  clearUsers: () => {},
}
const GithubContext = createContext<IGithubContext>(defaultValues)

export const GithubProvider = ({ children }: IChildren) => {
  const initialState = {
    users: [],
    loading: true,
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)

  const fetchUsers = async () => {
    try {
      const response = await API.get("/users")
      const data = response.data

      dispatch({
        type: "GET_USERS",
        payload: data,
      })
    } catch (err) {
      console.log(err)
    }
  }

  //Search users
  const searchUsers = async (text: string) => {
    try {
      const params = new URLSearchParams({
        q: text,
      })

      const response = await API.get(`/search/users?${params}`, {})
      const { items } = await response.data

      dispatch({
        type: "SEARCH_USER",
        payload: items,
      })
    } catch (err) {
      console.log(err)
    }
  }

  //Clear users
  const clearUsers = () => {
    dispatch({
      type: "CLEAR_USERS",
      payload: [],
    })
  }
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        fetchUsers,
        searchUsers,
        clearUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}

export default GithubContext
