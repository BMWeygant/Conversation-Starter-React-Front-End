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
        if(this.state.convos.length === 0){
        return <h1>Just going through motions</h1>
        }
         return (
            <div>
                <ul>
                    {this.state.convos.map(convo => (
                        <div>
                            <p>ID: {convo.id}</p>
                            <p>Topic: {convo.topic}</p>
                            <p>Location: {convo.location}</p>
                            <p>Witnesses: {convo.witnesses}</p>
                            <p>Ice Breaker: {convo.ice_breaker}</p>
                        </div>
                    ))}
                </ul>
            </div>
                )
    }

}