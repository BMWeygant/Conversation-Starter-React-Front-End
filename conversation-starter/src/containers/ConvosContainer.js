import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchConvos, createConvo, updateRelationship, updateLocation, updateApproachability } from '../redux/actions/convosActions'
import { updateQuote } from '../redux/actions/quotesActions'


class ConvosContainer extends Component {

    componentDidMount() {
        this.props.fetchConvos()
    }

    handleRelationship = (event, status) => {
        this.props.updateRelationship(
          status
        );
      }

      handleLocation = (event, status) => {
        this.props.updateLocation(
          status
        );
      }

      handleApproachability = (event, status) => {
        this.props.updateApproachability(
          status
        );
      }

    //   handleQuote = (event, status) => {
    //     this.props.updateQuote(
    //       status
    //     );
    //   }

    handleSubmit = event => {
        event.preventDefault()
        this.props.createConvo(this.props.convo)
      }

    render(){
        return(
            <div className = 'convo-container'>               
               <div className = 'convo-header'>
               <h1>Let's do some shit!</h1>
               </div>
               <form onSubmit={(e) => this.handleSubmit(e)}>
               <label>
                   What's your relationship with this person?<br></br>
                    <input
                        type="radio" 
                        name="relationship"
                        value="professional"
                        onChange={(e) => this.handleRelationship(e, "professional")}
                    /> Professional
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="relationship"
                        value="family"
                        onChange={(e) => this.handleRelationship(e, "family")}
                    /> Family
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="relationship"
                        value="none"
                        onChange={(e) => this.handleRelationship(e, "none")}
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
                        onChange={(e) => this.handleLocation(e, "work")}
                    /> Work
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="location"
                        value="home"
                       onChange={(e) => this.handleLocation(e, "home")}
                    /> Home
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="location"
                        value="school"
                        onChange={(e) => this.handleLocation(e, "school")}
                    /> School
                </label>
                <br />
                <br></br>
                <label>
                    How approachable does the person feel to you?<br></br>
                    <input 
                        type="radio" 
                        name="approachability"
                        value="very"
                        onChange={(e) => this.handleApproachability(e, "very")}
                    /> Very
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="approachability"
                        value="average"
                        onChange={(e) => this.handleApproachability(e, "average")}
                    /> Average
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="approachability"
                        value="not at all"
                        onChange={(e) => this.handleApproachability(e, "not at all")}
                    /> Not at all
                </label>
                <br></br>
                <br></br>
                <button>Submit</button>
               <h4>{() => this.props.quote}</h4>
               </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      convo: state.convos
    }
  }

export default connect (mapStateToProps, { fetchConvos, createConvo, updateRelationship, updateLocation, updateApproachability, updateQuote })(ConvosContainer)