export const fetchConvos = () => dispatch => {
    return fetch("http://localhost:3001/convos")
    .then(res => res.json())
    .then(convos =>
        dispatch({type: "FETCH_CONVOS_SUCCESS", payload: convos})
    )
}

export const createConvo = convo => {

    return dispatch => {
  
      return fetch("http://localhost:3001/convos", {
        method: "POST",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({relationship: convo.relationship, targetApproachability: convo.target_approachability, location: convo.location, iceBreaker: convo.ice_breaker}),
      })
        .then(response => response.json())
  
        .then(convo => {
  
        //   dispatch(addConvo(convo))
        //   dispatch(resetConvoForm())
        })
        .catch(error => console.log(error))
    }
  }
  