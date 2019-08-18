import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchConvos, createConvo } from '../redux/actions/convosActions'


class ConvosContainer extends Component {
           // this.handleChange = this.handleChange.bind(this)

    componentDidMount() {
        this.props.fetchConvos()
    }

    handleChange = event => {
        const {name, value} = event.target
         this.setState({ [name]: value })
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
                        checked={() => this.props.convos.relationship === "professional"}
                        onChange={() => this.handleChange}
                    /> Professional
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="relationship"
                        value="family"
                        checked={() => this.props.convos.relationship === "family"}
                        onChange={() => this.handleChange}
                    /> Family
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="relationship"
                        value="none"
                        checked={() => this.props.convos.relationship === "none"}
                        onChange={() => this.handleChange}
                    /> None
                </label>
                <button>Submit</button>
               </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return{
        createConvo: (convo) => dispatch(createConvo(convo))
    }
}

export default connect (mapDispatchToProps, { fetchConvos })(ConvosContainer)