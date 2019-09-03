const initialState = {
    name: "", 
    content: "",
    comments: []

}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_COMMENT_SUCCESS':
            return {
                comments: action.payload
            }
            case 'FETCH_NAME_SUCCESS':
            return {
                ...state,
                name: action.payload
            }
            case 'FETCH_CONTENT_SUCCESS':
            return {
                ...state,
                content: action.payload
            }
        case 'SUBMIT_COMMENT_SUCCESS':
            return {
                ...state,
                name: "",
                content: "",
                comments: [...state.comments, action.payload]
            }
        case 'SET_COMMENT_NAME':
            return {
                ...state,
                name: action.payload
            }
        
        case 'SET_COMMENT_CONTENT':
            return {
                ...state,
                content: action.payload
            }
        default:
            return state
    }
}