import spinner from "./assets/spinner.gif"

export const Spinner = () => {
  return (
    <div className="spinner">
      <img src={spinner} alt="Loading..." width={180} className="loading" />
    </div>
  )
}
