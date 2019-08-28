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

    // displayQuote(){
    //   let index = 0
    
    // if(this.props.quotes.convos.relationship === "none"){
    //   index = 1
    // }
    // else if(this.props.quotes.convos.relationship === "family" && this.props.quotes.convos.approachability === "not at all"){
    //   index = 2
    // }
    // else if(this.props.quotes.convos.relationship === "professional" && this.props.quotes.convos.location === "school"){
    //   index = 3
    // }
    //   return(
    //     <li>{this.props.quotes.quotes.quote[index].line}</li>
    //   )
    // }
    
    render(){
      return(
          <div className = 'quotes-container'>
          <ul className = 'quotes-list'>
            {/* {console.log(this.props.quotes.quote)} */}
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