import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchQuotes, updateQuote } from '../redux/actions/quotesActions'
import Quote from './Quote'




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
      return(
          <div className = 'quotes-container'>
          <ul className = 'quotes-list'>
            {this.props.quotes.quote.map(quote => {
              return<Quote quote={quote} />
            })}
       </ul>
          </div>
      )
    }

}





const mapStateToProps = state => {
    return {
      quotes: state.quotes
    }
  }

export default connect(mapStateToProps, {updateQuote, fetchQuotes})(QuotesContainer)