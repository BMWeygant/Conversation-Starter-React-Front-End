const initialState = [{
   initiator_gender: '',
   initiator_swag: '',
   target_gender: '',
   target_approachability: '',
   relationship: '',
   topic: '',
   location: '',
   conscience: '',
   ice_breaker: '',
   convos: []
}]
    
    export default (state = initialState, action) => {
       switch(action.type){
          case "FETCH_CONVOS_SUCCESS":
             return action.payload
          default:
             return state
       }
    }