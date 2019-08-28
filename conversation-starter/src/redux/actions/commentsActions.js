export const fetchComments = () => {
    return  (dispatch) => fetch('http://localhost:3001/comments')
    .then(res => res.json())
    .then(comment =>
        dispatch({type: "FETCH_COMMENT_SUCCESS", payload: comment})
    )
}

export const setName = name => {
    return {
      type: 'SET_COMMENT_NAME',
      payload: name
    }
}
  
export const setContent = content => {
    return {
        type: 'SET_COMMENT_CONTENT',
        payload: content
    }
}

export const addComment = comment => {
    return {
      type: "SUBMIT_COMMENT_SUCCESS",
      comment
    }
  }

export const resetCommentForm = () => {
    return {
        type: "RESET_COMMENT_FORM"

    }
}

export const createComment = (comment) => {
    return (dispatch) => {
  
       fetch('http://localhost:3001/comments/', {
        method: "POST",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
                 name: comment.name,
              content: comment.content
            }
          )
        })
        .then((response) => {return response.json()})

        .then(comment => {
            console.log(comment)
            dispatch(addComment(comment))
            dispatch(resetCommentForm())
          })
          .catch(error => console.log(error))
      }
    }
    
