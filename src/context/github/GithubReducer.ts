const githubReducer = (state: any, action: { type: string,payload?:object }) => {
    switch (action.type) {
      case "GET_USERS":
        return {
          ...state,
          users: action.payload,
          loading: false,
        }
      case "SEARCH_USER":
        return {
          ...state,
          users: action.payload,
          loading: false,
        }
      case "GET_USER":
        return {
          ...state,
          user:action.payload,
          loading:false
        }
      case "GET_REPOS":
        return {
          ...state,
          repos:action.payload,
          loading:false,
        }
      case "CLEAR_USERS":
        return {
          ...state,
          users: [],
        }
      case "SET_LOADING":
        return {
          ...state,
          loading: true,
        }
      default:
        return state
    }
}

export default githubReducer