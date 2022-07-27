import { createContext, useReducer } from "react"
import alertReducer from "./AlertReducer"
import { IAlertContext, IChildren } from "../../interface/interface"

const defaultValues = {
  alert: null,
  setAlert: () => {},
}
const AlertContext = createContext<IAlertContext>(defaultValues)

export const AlertProvider = ({ children }: IChildren) => {
  const initialState = {
    alert:null
  }
  const [state, dispatch] = useReducer(alertReducer, initialState)

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
    >
      {children}
    </AlertContext.Provider>
  )
}

export default AlertContext
