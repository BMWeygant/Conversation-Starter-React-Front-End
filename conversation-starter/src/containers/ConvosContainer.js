import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchConvos } from '../redux/actions/convosActions'

class ConvosContainer extends Component {
    // state = {
    //     convos: []
    // }

    componentDidMount() {
        {this.props.fetchConvos()}
    }

    render(){
        if(this.props.convos.length === 0) {
            return <h1>Loading</h1>
        }
        return(
            <div>
               <ul>
                   {this.props.convos.map(convo => (
                       <div key={convo.id}>
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

export default connect (mapStateToProps, { fetchConvos })(ConvosContainer)