const initialState = {
        initiator_gender: '',
        initiator_swag: '',
        target_gender: '',
        target_approachability: '',
        relationship: '',
        topic: '',
        location: '',
        conscience: '',
        ice_breaker: '',
    }
    
    export default (state = initialState, action) => {
        switch(action.type){
           case 'FETCH_CONVOS_FINISHED':
               return {
                ...state,
                initiators: action.payload,
               }
            case 'FETCH_GENDER_FINISHED':
               return {
                ...state,
                initiators: action.payload,
               }
            case 'FETCH_SWAG_FINISHED':
               return {
                ...state,
                initiators: action.payload,
               }
            case 'FETCH_CONSCIENCE_FINISHED':
               return {
                ...state,
                initiators: action.payload,
               }
            case 'FETCH_ROMANTIC_INTEREST_FINISHED':
               return {
                ...state,
                initiators: action.payload,
               }
            default:
                return state
        }
    }
    