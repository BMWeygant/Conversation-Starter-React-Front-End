import React, { Component } from 'react'
import Like from './Like'

export default class Quote extends Component {

        // state = {
        //     count: 0
        // }

        // handleClick = () => {
        //     this.setState((prevState, { count }) => ({
        //       count: prevState.count + 1
        //     }
        //     ))
        // }
    
        
        render(){
           return (
               <div>
                <li><a href={'/quotes/' + this.props.quote.id}>{this.props.quote.line}</a> <Like /></li>
             </div>
            )
         }
}
// <button onClick={this.handleClick}>like</button>Likes: {this.state.count}
/* <li>{this.props.quote.line} <Like /></li>  */