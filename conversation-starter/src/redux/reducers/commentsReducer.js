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
                comment: [...state.comment, action.payload]
            }
        case 'SET_COMMENT_NAME':
            return {
                name: action.payload
            }
        
        case 'SET_COMMENT_CONTENT':
            return {
                content: action.payload
            }
        case 'RESET_COMMENT_FORM':
            return {
                initialState
            };
            
        default:
            return state
    }
}