const githubReducer = (state: any, action: { type: string,payload:object }) => {
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
          loading: true,
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