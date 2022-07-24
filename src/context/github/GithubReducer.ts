const githubReducer = (state: any, action: { type: any,payload:any }) => {
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
      case "CLEAR_USERS":
        return {
          ...state,
          users: [],
        }
      default:
        return state
    }
}

export default githubReducer