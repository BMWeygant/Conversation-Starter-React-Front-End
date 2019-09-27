import React, { Component } from 'react'


export default class Like extends Component {

    state = {
        like: 0
    }

    handleClick = () => {
        this.setState((prevState, { like }) => ({
          like: prevState.like + 1
        }
        ))
    }
    
    render(){
       return (
           <div>
            <button onClick={this.handleClick}>like</button>Likes: {this.state.like}
         </div>
        )
     }
}
