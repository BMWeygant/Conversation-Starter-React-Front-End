import React, { Component } from 'react'

export default class Comments extends Component{


    render(){
        return(
            <div>
                {/* {console.log(this.props.comment.quote_id)}
                {console.log(document.location.pathname.match(/\d+/g)[0])} */}
            <li><strong>{this.props.comment.name}</strong><br /> {this.props.comment.content} </li><br />
            </div>
        )
    }
}

