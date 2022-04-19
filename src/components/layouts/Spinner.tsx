import { IChildren } from "../../interface/interface"
import spinner from "./assets/spinner.gif"

export const Spinner: React.FC<IChildren> = () => {
  return <div className="spinner">{spinner}</div>
}
