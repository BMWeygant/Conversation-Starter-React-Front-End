export const fetchQuotes = () => {
    return (dispatch) => {fetch("http://localhost:3001/quotes")
    .then(res => res.json())
    .then(quote =>
        dispatch({type: "FETCH_QUOTE_SUCCESS", payload: quote})
    )}
}


export const updateQuote = quote => {
    return {
      type: 'UPDATE_QUOTE',
      payload: quote
    }
  }

