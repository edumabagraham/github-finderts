import { createContext, useReducer } from "react"
import { IChildren } from "../../interface/interface"
// import { IAlert } from "../interface"
import { alertReducer } from "./AlertReducer"
import { alertState } from "../initialStates"

export const AlertContext = createContext<any>(alertState)
export const AlertProvider = ({ children }: IChildren) => {
  // const initialState = null
  const [state, dispatch] = useReducer(alertReducer, alertState)

  const setAlert = (msg: string, type: string) => {
    dispatch({
      type: "SET_ALERT",
      payload: { msg, type },
    })

    setTimeout(
      () =>
        dispatch({
          type: "REMOVE_ALERT",
        }),
      3000
    )
  }

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    ></AlertContext.Provider>
  )
}
