import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createConvo, updateQuote } from '../redux/actions/convosActions'


class QuoteContainer extends Component {

    handleQuote = (event, status) => {
        this.props.updateQuote(
          status
        );
      }
    
    render() {
        <div>
        <h1>This is a quote from the quote container</h1>
        </div>
    }
}



const mapStateToProps = state => {
    return {
      quote: state.quotes
    }
  }

export default connect(mapStateToProps, {updateQuote, createConvo})(QuoteContainer)