const githubReducer = (state: any, action: { type: any,payload:any }) => {
    switch(action.type){
        case'GET_USERS':
            return{
                ...state,
                users:action.payload,
                loading:false,
            }
        case 'SEARCH_USER':
            return{
                ...state,
                users:action.payload,
                loading:false,
            }
        default:
            return state
    }
}

export default githubReducer