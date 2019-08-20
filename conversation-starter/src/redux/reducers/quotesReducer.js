const initialState = {
    quote: ''
  }


export default (state = initialState, action) => {
    switch(action.type){
      case "UPDATE_QUOTE":
            return {
               ...state,
               quote: action.payload,
         }
        case "FETCH_QUOTE_SUCCESS":
            return {
               ...state, 
               quote: action.payload,
            }  
 default:
    return state
      }

    }