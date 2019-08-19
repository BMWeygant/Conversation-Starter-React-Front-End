const initialState = {
  relationship: '',
  location: '',
  approachability: '',
  quote: ''
}
    
    export default (state = initialState, action) => {
       switch(action.type){
          case "FETCH_RELATIONSHIP_SUCCESS":
             return {
               ...state, 
               relationship: action.payload,
            }
          case "FETCH_LOCATION_SUCCESS":
               return {
               ...state, 
               location: action.payload,
            }
          case "FETCH_APPROACHABILITY_SUCCESS":
               return {
               ...state, 
               approachability: action.payload,
            }         
             case "FETCH_QUOTE_SUCCESS":
               return {
               ...state, 
               quote: action.payload,
            }           
            case "START_NEW_CONVO":
              return {
                 initialState
               }
          default:
             return state
       }
    }