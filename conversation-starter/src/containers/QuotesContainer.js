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
    
    render(){
    
      return (
          <div>
          <h1>This is a quote from the quote container</h1>
          </div>
      )
    }
}



const mapStateToProps = state => {
    return {
      quote: state.quotes
    }
  }

export default connect(mapStateToProps, {updateQuote, fetchQuotes})(QuotesContainer)