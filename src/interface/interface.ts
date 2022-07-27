export interface IChildren {
  children?: React.ReactNode
}

export interface INavbar {
  title: string
}


export interface IUser{
  login:string,
  avatar_url:string,
}

export interface IGithubContext {
  users: Array<object>
  user?: object
  loading: boolean
  fetchUsers: () => void
  searchUsers: (text: string) => any
  clearUsers: () => void
}

export interface IAlertContext {
  alert: any
  setAlert: (msg: string, type: string) => void
}