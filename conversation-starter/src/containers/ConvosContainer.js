import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchConvos, createConvo, updateRelationship, updateLocation, updateApproachability, newConvo } from '../redux/actions/convosActions'
import  QuotesContainer  from '../containers/QuotesContainer'

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

    handleSubmit = event => {
        event.preventDefault()
        let convoData = {
            relationship: this.props.convo.relationship,
            location: this.props.convo.location,
            approachability: this.props.convo.approachability
        }
        this.props.createConvo(convoData)
        let resetForm = document.getElementById("convo-form")
      resetForm.reset()
      }

      handleReset = ({fields, form}) => {
          this.props.newConvo(
        
          );
      }

    render(){
        return(
            <div className = 'convo-container'>               
               <div className = 'convo-header'>
               <h1>So Let's Talk</h1>
               <br />
               </div>
               <form id='convo-form' onSubmit={(e) => this.handleSubmit(e)} onReset={this.handleReset}>
               <label>
                   <h4 className = 'convo-question'>What's your relationship with this person?</h4>
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
                <label>
                    <h4 className = 'convo-question'>What kind of environment is the conversation taking place in?</h4>
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
                <h4 className = 'convo-question'>How approachable does the person feel to you?</h4>
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
                <button>Reset Form</button>
                <QuotesContainer {...this.props}/>
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

export default connect (mapStateToProps, { fetchConvos, createConvo, updateRelationship, updateLocation, updateApproachability, QuotesContainer, newConvo })(ConvosContainer)