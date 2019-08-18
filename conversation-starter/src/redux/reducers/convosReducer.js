const initialState = []
    
    export default (state = initialState, action) => {
       switch(action.type){
          case "FETCH_RELATIONSHIP_SUCCESS":
             return action.payload
          case "FETCH_LOCATION_SUCCESS":
               return action.payload
          case "FETCH_APPROACHABILITY_SUCCESS":
               return action.payload
          case "FETCH_QUOTE_SUCCESS":
               return action.payload;
          default:
             return state
       }
    }