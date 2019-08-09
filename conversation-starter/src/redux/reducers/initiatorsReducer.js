const initialState = []

export default (state = initialState, action) => {
    switch(action.type){
        case "FETCH_INITIATORS_FINISHED":
            return action.payload
        default:
            return state
    }
}


// const initialState = {
//     gender: '',
//     swag: '',
//     conscience: null,
//     romantic_interest: null
// }

// export default (state = initialState, action) => {
//     switch(action.type){
//        case 'FETCH_INITIATORS_FINISHED':
//            return {
//             ...state,
//             initiators: action.payload,
//            }
//         case 'FETCH_GENDER_FINISHED':
//            return {
//             ...state,
//             initiators: action.payload,
//            }
//         case 'FETCH_SWAG_FINISHED':
//            return {
//             ...state,
//             initiators: action.payload,
//            }
//         case 'FETCH_CONSCIENCE_FINISHED':
//            return {
//             ...state,
//             initiators: action.payload,
//            }
//         case 'FETCH_ROMANTIC_INTEREST_FINISHED':
//            return {
//             ...state,
//             initiators: action.payload,
//            }
//         default:
//             return state
//     }
// }
