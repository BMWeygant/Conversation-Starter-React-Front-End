import React, { Component } from 'react'
import { connect } from 'react-redux'


class ConvosContainer extends Component {
    // state = {
    //     convos: []
    // }

    componentDidMount() {
        fetch("http://localhost:3001/convos")
        .then(res => res.json())
        .then(convos => this.setState( { convos }))
    }

    render(){
        if(this.props.convos.length === 0) {
            return <h1>Loading</h1>
        }
        return(
            <div>
               <ul>
                   {this.props.convos.map(convo => (
                       <div>
                           <p>Topic: {convo.topic}</p>
                       </div>
                   ))}
               </ul> 
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        convos: state.convos
    }
}

export default connect (mapStateToProps)(ConvosContainer)