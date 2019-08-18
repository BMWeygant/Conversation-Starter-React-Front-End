import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchConvos } from '../redux/actions/convosActions'


class ConvosContainer extends Component {

    componentDidMount() {
        this.props.fetchConvos()
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({ [name]: value })
    }

    render(){
        return(
            <div className = 'convo-container'>               
               <div className = 'convo-header'>
               <h1>Let's do some shit!</h1>
               </div>
               <form onSubmit={this.handleSubmit}>
               <label>
                   What's your relationship with this person?<br></br>
                    <input
                        type="radio" 
                        name="relationship"
                        value="professional"
                        // checked={() => this.props.relationship === "professional"}
                         onChange={() => this.handleChange}
                    /> Professional
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="relationship"
                        value="family"
                        //checked={() => this.props.relationship === "family"}
                        onChange={() => this.handleChange}
                    /> Family
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="relationship"
                        value="none"
                        //checked={() => this.props.relationship === "none"}
                        onChange={() => this.handleChange}
                    /> None
                </label>
                <br />
                <br />
                <br /> 
                <label>
                    Where is the conversation taking place? <br></br>
                    <input 
                        type="radio" 
                        name="location"
                        value="work"
                        //checked={() => this.props.location === "work"}
                        onChange={() => this.handleChange}
                    /> Work
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="location"
                        value="home"
                        //checked={() => this.props.location === "home"}
                        onChange={() => this.handleChange}
                    /> Home
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="location"
                        value="store"
                        //checked={() => this.props.location === "store"}
                        onChange={() => this.handleChange}
                    /> Store
                </label>
                <br />
                <br></br>
                <label>
                    How approachable does the person feel to you?<br></br>
                    <input 
                        type="radio" 
                        name="approachability"
                        value="very"
                        //checked={() => this.props.approachability === "high"}
                        onChange={() => this.handleChange}
                    /> Very
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="approachability"
                        value="average"
                        //checked={() => this.props.approachability === "average"}
                        onChange={() => this.handleChange}
                    /> Average
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="approachability"
                        value="not at all"
                        //checked={() => this.props.approachability === "low"}
                        onChange={() => this.handleChange}
                    /> Not at all
                </label>
                <br></br>
                <br></br>
                <button>Submit</button>
               </form>
               {/* <h4>{() => this.props.convos.approachability}</h4> */}
               {/* <h4>{this.props.relationship}</h4>
               <h4>{this.props.location}</h4> */}
               {/* <h4>{this.props.quote}</h4> */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      createConvo: state.createConvo
    }
  }

export default connect (mapStateToProps, { fetchConvos })(ConvosContainer)