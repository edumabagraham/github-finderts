import { IChildren } from "../../interface/interface"

export const Card: React.FC<IChildren> = ({ children }) => {
  return <div className="card">{children}</div>
}
