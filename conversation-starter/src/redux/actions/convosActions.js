export const fetchConvos = () => {
    return (dispatch) => {fetch("http://localhost:3001/convos")
    .then(res => res.json())
    .then(relationship =>
        dispatch({type: "FETCH_RELATIONSHIP_SUCCESS", payload: relationship})
    )
    .then(location =>
        dispatch({type: "FETCH_LOCATION_SUCCESS", payload: location})
    )
    .then(approachability =>
        dispatch({type: "FETCH_APPROACHABILITY_SUCCESS", payload: approachability})
    )
    .then(quote =>
        dispatch({type: "FETCH_QUOTE_SUCCESS", payload: quote})
    )}
}

export const updateRelationship = convo => {
    return {
      type: 'UPDATE_RELATIONSHIP',
      payload: convo
    }
  }

export const createConvo = (convo) => {

    return (dispatch) => {
  
       fetch("http://localhost:3001/convos", {
        method: "POST",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({relationship: convo.relationship, approachability: convo.approachability, location: convo.location, quote: convo.quote}),
      })
        .then((response) => {return response.json()})
    }
  }
  