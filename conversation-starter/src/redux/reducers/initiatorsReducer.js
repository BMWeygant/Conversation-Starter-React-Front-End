const initialState = []

// const initialState = {
//     gender: '',
//     swag: '',
//     conscience: null,
//     romantic_interest: true,
//     initiators: []
// }

export default (state = initialState, action) => {
    switch(action.type){
        case "FETCH_INITIATORS_FINISHED":
            return action.payload
        default:
            return state
    }
}