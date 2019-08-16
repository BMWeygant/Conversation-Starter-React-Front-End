import React, { Component } from 'react'


export default class ConvosContainer extends Component {
    state = {
        convos: []
    }

    componentDidMount() {
        fetch("http://localhost:3001/convos")
        .then(res => res.json())
        .then(convos => this.setState( { convos }))
    }

    render(){
        if(this.state.convos.length === 0) {
            return <h1>Loading</h1>
        }
        return(
            <div>
               <ul>
                   {this.state.convos.map(convo => (
                       <div>
                           <p>Topic: {convo.topic}</p>
                       </div>
                   ))}
               </ul> 
            </div>
        )
    }
}