import { createContext, useState,useReducer } from "react"
import { IChildren,IGithubContext } from "../../interface/interface"
import { API } from "../../axios"
import githubReducer from "./GithubReducer"


const defaultValues = {
  users: [],
  loading: true,
  fetchUsers: () => {},
}
const GithubContext = createContext<IGithubContext>(defaultValues)

export const GithubProvider = ({ children }: IChildren) => {

  const initialState = {
    users:[],
    loading:true,
  }

  const [state,dispatch] = useReducer(githubReducer,initialState)

  const fetchUsers = async () => {
    try {
      const response = await API.get("/users")
      const data = response.data

      dispatch({
        type: 'GET_USERS',
        payload: data,
      })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <GithubContext.Provider
      value={{
        users:state.users,
        loading:state.loading,
        fetchUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}

export default GithubContext
