import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchComments, setName, setContent, addComment, resetCommentForm, createComment } from '../redux/actions/commentsActions'
import { withRouter } from 'react-router-dom'
import Comments from './Comments';

class CommentsContainer extends Component {
  

componentDidMount(){
 this.props.fetchComments()
}

handleOnSubmit = e => {
  e.preventDefault()
      let commentData = {
          name: this.props.comments.name,
          content: this.props.comments.content,
          quote_id: parseInt(document.location.href.match(/\d+/g)[1])
      }
      this.props.createComment(commentData)
      let resetForm = document.getElementById("comment-form")
      resetForm.reset()          
}

handleNameChange = e => {
  this.props.setName(e.target.value)
}

handleContentChange = e => {
  this.props.setContent(e.target.value)
}

render(){
  return <div className='comments-container'>
            <div className='comments-header'>
              <h1>Have something to say?</h1>
            </div>
            <form id="comment-form" onSubmit={(e) => this.handleOnSubmit(e)}>
              <div>
                <label>
                   Name:
                  <input type="text" name= "name" value={this.props.comments.name} onChange={(e) => this.handleNameChange(e)} />
                </label>
                <br />
                <label>
                  Comment:
                  <textarea type="text" name= "content" value={this.props.comments.content} onChange={(e) => this.handleContentChange(e)} cols={24} rows={5} />
                </label>
              </div>
                <button>Submit</button>
            </form>
               
          <div className = 'quote-comments'>                 
          <ul className = 'quote-comments-list'>
            {this.props.comments.map(comment => {
              return<Comments comment={comment} />
            })}
       </ul>
  </div>
  </div>
  }
}



const mapStateToProps = (state, props) => {
  const quoteId = +props.match.params.id
  const quoteComments = state.comments.comments.filter(function(comment) {
   return comment.quote_id  === quoteId
  })
  return {
    comments: quoteComments
  }
}

 export default connect(mapStateToProps, { withRouter, fetchComments, setName, setContent, addComment, resetCommentForm, createComment })(CommentsContainer)
