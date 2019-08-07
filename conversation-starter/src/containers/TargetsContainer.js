import React, { Component } from 'react'

export default class InitiatorsContainer extends Component {
    state = {
        targets: []
    }

    componentDidMount() {
        fetch("http://localhost:3001/targets")
        .then(res => res.json())
        .then(targets => this.setState( { targets }))
    }
    render(){
        if(this.state.targets.length === 0){
        return <h1>Just going through motions</h1>
        }
         return (
            <div>
                <ul>
                    {this.state.targets.map(target => (
                        <div>
                            <p>ID: {target.id}</p>
                            <p>Gender: {target.gender}</p>
                            <p>Swag: {target.swag}</p>
                            <p>Relationship: {target.relationship}</p>
                            <p>Appearance: {target.appearance}</p>
                        </div>
                    ))}
                </ul>
            </div>
                )
    }

}