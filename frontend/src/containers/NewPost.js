import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPostAsync } from '../actions'
import NewPostView from '../components/NewPostView'

class NewPost extends Component {
  constructor(props) {
    super(props)
    this.addPost = this.addPost.bind(this)
  }

  addPost(timestamp, title, body, author, category, id) {
    this.props.dispatch(addPostAsync(timestamp, title, body, author, category, id))
    this.props.history.push("/")
  }

  render() {
    return (
        <NewPostView
          addPost={this.addPost}/>
    )
  }
}

function mapStateToProps ({ forum }) {
  return {
    forum
  }
}

export default connect(
  mapStateToProps,
)(NewPost)
