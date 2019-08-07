import React, { Component } from 'react'

export default class InitiatorsContainer extends Component {
    state = {
        initiators: []
    }

    componentDidMount() {
        fetch("http://localhost:3001/initiators")
        .then(res => res.json())
        .then(initiators => this.setState( { initiators }))
    }
    render(){
        if(this.state.initiators.length === 0){
        return <h1>Just going through motions</h1>
        }
         return (
            <div>
                <ul>
                    {this.state.initiators.map(initiator => (
                        <div>
                            <p>ID: {initiator.id}</p>
                            <p>Gender: {initiator.gender}</p>
                            <p>Swag: {initiator.swag}</p>
                            <p>Conscience: {initiator.conscience}</p>
                        </div>
                    ))}
                </ul>
            </div>
                )
    }

}