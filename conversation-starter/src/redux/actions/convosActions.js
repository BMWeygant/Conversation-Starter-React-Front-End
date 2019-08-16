export const fetchConvos = () => dispatch => {
    return fetch("http://localhost:3001/convos")
    .then(res => res.json())
    .then(convos =>
        dispatch({type: "FETCH_CONVOS_SUCCESS", payload: convos})
    )
}