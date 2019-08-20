import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchQuotes, updateQuote } from '../redux/actions/quotesActions'





class QuotesContainer extends Component {

  componentDidMount() {
    this.props.fetchQuotes()
  }

    handleQuote = (event, status) => {
        this.props.updateQuote(
          status
        );
      }

    displayQuote(){
      let index = 0
    
    if(this.props.store.convos.relationship === "none"){
      index = 1
    }
    else if(this.props.store.convos.relationship === "family" && this.props.store.convos.approachability === "not at all"){
      index = 2
    }
    else if(this.props.store.convos.relationship === "professional" && this.props.store.convos.location === "school"){
      index = 3
    }
      return(
        <li>{this.props.store.quotes.quote[index].line}</li>
      )
    }
    
    render(){
      return(
          <div className = 'quotes-container'>
          <ul className = 'quotes-list'>
            {this.displayQuote()}
       </ul>
          </div>
      )
    }

}





const mapStateToProps = state => {
    return {
      store: state
    }
  }

export default connect(mapStateToProps, {updateQuote, fetchQuotes})(QuotesContainer)