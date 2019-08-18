export const fetchConvos = () => async dispatch => {
    const res = await fetch("http://localhost:3001/convos");
    const relationship = await res.json();
    const location = dispatch({ type: "FETCH_RELATIONSHIP_SUCCESS", payload: relationship });
    const approachability = dispatch({ type: "FETCH_LOCATION_SUCCESS", payload: location });
    const quote = dispatch({ type: "FETCH_APPROACHABILITY_SUCCESS", payload: approachability });
    return dispatch({ type: "FETCH_QUOTE_SUCCESS", payload: quote });
}

export const createConvo = (convo) => {

    return async (dispatch) => {
  
      try {
            const response = await fetch("http://localhost:3001/convos", {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ relationship: convo.relationship, approachability: convo.approachability, location: convo.location, quote: convo.quote }),
            });
            return response.json();
        }
        catch (error) {
            return console.log(error);
        }
    }
  }
  