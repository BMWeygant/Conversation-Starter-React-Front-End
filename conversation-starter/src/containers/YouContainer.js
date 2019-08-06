import React, { Component } from 'react'

export default class Yous extends Component {
    state = {
        yous: []
    }

    componentDidMount() {
        fetch("http://localhost:3000/you")
        .then(res => res.json)
        .then(yous => this.setState( { yous }))
    }
    render(){
        if(this.state.yous.length === 0){
        return <h1>Just going through motions</h1>
        }
        return (
            <div>
                <ul>
                    {this.state.yous.map(you => (
                        <div>
                            <p>Gender: {you.gender}</p>
                        </div>
                    ))}
                </ul>
            </div>
                )
    }

}