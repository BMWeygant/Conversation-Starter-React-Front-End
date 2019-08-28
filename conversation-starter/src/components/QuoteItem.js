import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuotes } from '../redux/actions/quotesActions'
import  CommentsContainer  from '../containers/CommentsContainer'



 class QuoteItem extends Component {

    componentDidMount(){
        this.props.fetchQuotes()
    }

    render(){
       return( 
           this.props.quote.map(quote => (
            <div key={quote.id}>
                <h2>{quote.line}</h2>
                <CommentsContainer />
            </div>
          ))
       )
    }
}

const mapStateToProps = (state) => {
    const quoteId = document.location.href.match(/\d+/g)[1];
  
    const quote = state.quotes.quote.filter(quote => quote.id == quoteId);
  
      return {
        quote: quote
      }
   }
export default connect(mapStateToProps, {fetchQuotes, CommentsContainer})(QuoteItem);