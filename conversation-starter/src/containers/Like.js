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


    
    callApi = () => {
        //console.log("calling api")
        // make a fetch request to your rails backend to get a list of anything - quotes and log them to the console here
         fetch('http://localhost:3001/quotes')
        .then(response => response.json())
        .then(quotes => console.log(quotes))
       
    }
    
    render(){
       return (
           <div>
            <button onClick={this.callApi}>like</button>Likes: {this.state.like}
         </div>
        )
     }
}
