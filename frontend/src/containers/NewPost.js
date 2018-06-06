import React, { Component } from 'react'
import { connect } from 'react-redux'
import NewPostView from '../components/NewPostView'
import * as actions from '../actions'

class NewPost extends Component {

  addPost = (timestamp, title, body, author, category, id) => {
    this.props.addPostAsync(timestamp, title, body, author, category, id)
    this.props.history.push("/")
  }

  render() {
    return (
        <NewPostView addPost={this.addPost}/>
    )
  }
}

export default connect(null, actions)(NewPost)
