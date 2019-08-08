const initialState = []

export default (state = initialState, action) => {
    switch(action.type){
        case "FETCH_INITIATORS_FINISHED":
            return action.payload
        default:
            return state
    }
}