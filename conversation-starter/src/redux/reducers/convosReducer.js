const initialState = {
  relationship: '',
  location: '',
  approachability: '',
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
            case "UPDATE_RELATIONSHIP":
               return {
                  ...state,
                  relationship: action.payload,
            }
            case "UPDATE_LOCATION":
               return {
                  ...state,
                  location: action.payload,
            }
            case "UPDATE_APPROACHABILITY":
               return {
                  ...state,
                  approachability: action.payload,
            }
            case "START_NEW_CONVO":
              return {
                 initialState
               }
          default:
             return state
       }
    }