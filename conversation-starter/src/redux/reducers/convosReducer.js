const initialState = [{
   approachability: '',
   relationship: '',
   location: '',
   quote: ''
}]
    
    export default (state = initialState, action) => {
       switch(action.type){
          case "FETCH_CONVOS_SUCCESS":
             return action.payload
          default:
             return state
       }
    }