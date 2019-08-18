export const fetchConvos = () => dispatch => {
    return fetch("http://localhost:3001/convos")
    .then(res => res.json())
    .then(convos =>
        dispatch({type: "FETCH_CONVOS_SUCCESS", payload: convos})
    )
}

export const createConvo = (convo) => {

    return (dispatch) => {
  
      return fetch("http://localhost:3001/convos", {
        method: "POST",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({relationship: convo.relationship, approachability: convo.approachability, location: convo.location, quote: convo.quote}),
        //Ask Corinna about camel case vs rails _ syntax when posting to db
      })
        .then((response) => {return response.json()})
        .catch(error => console.log(error))
    }
  }
  