const initialState = [{
   target_approachability: '',
   relationship: '',
   location: '',
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