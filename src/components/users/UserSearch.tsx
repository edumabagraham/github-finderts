import { useState, useContext } from "react"
import GithubContext from "../../context/github/GithubContext"
import AlertContext from "../../context/alert/AlertContext"

export const UserSearch = () => {
  const [text, setText] = useState("")
  const { users, searchUsers,clearUsers } = useContext(GithubContext)
  const {setAlert} = useContext(AlertContext)

  const handleChange = (e: any) => {
    setText(e.target.value)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (text === "") {
      // setAlert("Enter something", 'error')
      alert("Enter something")
    } else {
      //user search goes here
      searchUsers(text)
      setText("")
    }
  }
  

  return (
    <div className="search-field">
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <input
            type="text"
            placeholder="Search"
            value={text}
            onChange={handleChange}
          />
          <button type="submit" className="search-btn">
            Go
          </button>
        </div>
      </form>
      {users.length > 0 && (
        <div>
          <button
            className="clear-btn"
            onClick={clearUsers}
          >
            Clear
          </button>
        </div>
      )}
    </div>
  )
}




