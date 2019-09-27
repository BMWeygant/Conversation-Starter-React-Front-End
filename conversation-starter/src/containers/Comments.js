import React, { Component } from 'react'

export default class Comments extends Component{


    render(){
        return(
            <div>
            <li><strong>{this.props.comment.name}</strong><br /> {this.props.comment.content} </li><br />
            </div>
        )
    }
}

