import { useContext } from "react"
import AlertContext from "../context/alert/AlertContext"

export const Alert = () => {
  const { alert } = useContext(AlertContext)

  return (
    alert !== null && (
      <p className="error">
        {alert.type === "error" && (
          <svg
            className="flex-none mt-0.5 error-icon"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="12" fill="#FECDD3"></circle>
            <path
              d="M8 8l8 8M16 8l-8 8"
              stroke="#B91C1C"
              strokeWidth="2"
            ></path>
          </svg>
        )}
        <p className="error-message">
          <strong>{alert.msg}</strong>
        </p>
      </p>
    )
  )
}
