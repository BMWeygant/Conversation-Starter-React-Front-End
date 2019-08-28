import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchComments, setName, setContent, addComment, resetCommentForm, createComment } from '../redux/actions/commentsActions'
import { withRouter } from 'react-router-dom';

class CommentsContainer extends Component {
  

componentDidMount(){
 this.props.fetchComments()
}

handleOnSubmit = e => {
  e.preventDefault()
      let commentData = {
          name: this.props.comments.name,
          content: this.props.comments.content,
      }
      this.props.createComment(commentData)          
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
            <form onSubmit={(e) => this.handleOnSubmit(e)}>
              <div>
                <label>
                   Name:
                  <input type="text" name= "name" onSubmit={(e) => this.handleNameChange(e)} value={this.props.comments.name} />
                </label>
                <br />
                <label>
                  Comment:
                  <textarea type="text" name= "content" onSubmit={(e) => this.handleContentChange(e)} value={this.props.comments.content} cols={24} rows={5} />
                </label>
              </div>
                <button>Submit</button>
            </form>
               
          <div>                 
    <ul>
      {console.log(this.props)}
      Hi
    </ul>
  </div>
  </div>
  }
}



const mapStateToProps = state => {
  return {
    comments: state.comments
  }
}

 export default connect(mapStateToProps, { withRouter, fetchComments, setName, setContent, addComment, resetCommentForm, createComment })(CommentsContainer)


//  <form onSubmit={(e) => this.handleSubmit(e)}>
//    <label>
//      Name:
//     <input type="text" name="name" onChange={(e) => this.handleName(e, {this.name})}/>
//    </label><br />
//    Comment:
//    <input type="textarea" name="content" onChange={(e) => this.handleContent(e, {this.name})}/>
//    <input type="submit" value="Submit" />
//  </form> 