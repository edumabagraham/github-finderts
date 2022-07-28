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
  user: any
  loading: boolean
  fetchUsers: () => void
  searchUsers: (text: string) => any
  getSingleUser: (login: string) => any
  getUserRepos:(login:string) => any
  clearUsers: () => void
  setLoading: () => void
}

export interface IAlertContext {
  alert: any
  setAlert: (msg: string, type: string) => void
}