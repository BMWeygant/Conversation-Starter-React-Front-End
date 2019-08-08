export const fetchInitiators = () => dispatch => {
    return fetch("http://localhost:3001/initiators")
    .then(res => res.json())
    .then(listings =>
      dispatch({type: "FETCH_INITIATORS_FINISHED", payload: initiators})
    )
  }