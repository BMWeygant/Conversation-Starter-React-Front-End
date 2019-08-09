import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchInitiators } from '../redux/actions/initiatorsActions'

 class InitiatorsContainer extends Component {
    

    componentDidMount() {
        this.props.fetchInitiators()
    }

    render(){
        if(this.props.initiators.length === 0){
        return <h1>Just going through motions</h1>
        }
         return (
            <div >
                <ul>
                    {this.props.initiators.map(initiator => (
                        <div key={initiator.id}>                            
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
export default connect(mapStateToProps, 
    { fetchInitiators }
    )(InitiatorsContainer)