import React, { Component } from 'react'
import { connect } from 'react-redux';

 class InitiatorsContainer extends Component {
    state = {
        initiators: []
    }

    componentDidMount() {
        fetch("http://localhost:3001/initiators")
        .then(res => res.json())
        .then(initiators => this.setState( { initiators }))
    }
    render(){
        if(this.props.initiators.length === 0){
        return <h1>Just going through motions</h1>
        }
         return (
            <div>
                <ul>
                    {this.props.initiators.map(initiator => (
                        <div>
                            <p>ID: {initiator.id}</p>
                            <p>Gender: {initiator.gender}</p>
                            <p>Swag: {initiator.swag}</p>
                            <p>Conscience: {initiator.conscience}</p>
                            <p>Romantic Interest: {initiator.romantic_interest}</p>
                        </div>
                    ))}
                </ul>
            </div>
                )
    }

}

const mapStateToProps = state => {
    return {
        initiators: state.initiators
    }
}
export default connect(mapStateToProps)(InitiatorsContainer)