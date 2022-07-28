import { createContext, useReducer } from "react"
import { IChildren, IGithubContext } from "../../interface/interface"
import { API } from "../../axios"
import githubReducer from "./GithubReducer"
import { useParams }from 'react-router-dom';

const defaultValues = {
  users: [],
  loading: false,
  user:{},
  fetchUsers: () => {},
  searchUsers: () => {},
  getSingleUser: () => {},
  getUserRepos: () => {},
  clearUsers: () => {},
  setLoading: () => {},
}
const GithubContext = createContext<IGithubContext>(defaultValues)

export const GithubProvider = ({ children }: IChildren) => {
  // const params = useParams()
  const initialState = {
    users: [],
    user: {},
    loading: false,
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)

  //Fetch all users -- first 30
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

      setLoading()
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

  //Get single user
  const getSingleUser = async (login: string) => {
    setLoading()
    const response = await API.get(`/users/${login}`, {})

    if (response.status === 404) {
      console.log("login")
      /*This is a work around i found online to solve the
      ts error*/
      const win: Window = window
      win.location = "/notfound"
      // window.location = "/notfound"
    } else {
      const data = await response.data
      dispatch({
        type: "GET_USER",
        payload: data,
      })
    }
  }

  //Get User's repos
  const getUserRepos = async (login:string) => {
    setLoading()
    const params = new URLSearchParams({
      // sort: "created",
      // per_page: 10,
    })

    const response = await API.get(`/users/${login}/repos?${params}`, {})
    const data = await response.data
    dispatch({
      type: "GET_REPOS",
      payload: data,
    })
  }

  //Clear users
  const clearUsers = () => {
    dispatch({
      type: "CLEAR_USERS",
      payload: [],
    })
  }

  //Set loading
  const setLoading = () => {
    dispatch({
      type: "SET_LOADING",
    })
  }

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        user: state.user,
        fetchUsers,
        searchUsers,
        getSingleUser,
        getUserRepos,
        clearUsers,
        setLoading,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}

export default GithubContext
