import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchConvos } from '../redux/actions/convosActions'

class ConvosContainer extends Component {
    // state = {
    //     convos: []
    // }

    componentDidMount() {
        this.props.fetchConvos()
    }

    render(){
        return(
            <div className = 'convo-container'>               
               <div classname = 'convo-header'>
               {/* <img src="https://previews.123rf.com/images/tawng/tawng1104/tawng110400004/9235025-editable-silhouettes-of-people-socializing-at-a-party.jpg?" alt="background"></img> */}

               <h1>Let's do some shit!</h1>
               </div>

               <form onSubmit={this.handleSubmit}>
               <label>
                    <input 
                        type="radio" 
                        name="relationship"
                        value="professional"
                        checked={this.props.relationship === "professional"}
                        onChange={this.handleChange}
                    /> Professional
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="relationship"
                        value="family"
                        checked={this.props.relationship === "family"}
                        onChange={this.handleChange}
                    /> Family
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="relationship"
                        value="male"
                        checked={this.props.relationship === "male"}
                        onChange={this.handleChange}
                    /> Male
                </label>




               </form>
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