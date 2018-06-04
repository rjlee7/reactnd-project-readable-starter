import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  updatePostAsync,
  deletePostAsync,
  receivePostAsync,
  receiveCommentsAsync
} from '../actions'
import PostView from '../components/PostView'

class Post extends Component {
  componentDidMount() {
    const post_id = this.props.match.params.post_id
    this.props.dispatch(receivePostAsync(post_id))
    this.props.dispatch(receiveCommentsAsync(post_id))
  }

  deletePost = (id) => {
    this.props.dispatch(deletePostAsync(id))
    this.props.history.push("/")
  }

  editPost = (id, title, body) => {
    this.props.dispatch(updatePostAsync(id, title, body))
  }

  render() {
    const { post, comments } = this.props.forum
    return (
      post ?
        <PostView
          post={post}
          editPost={this.editPost}
          deletePost={this.deletePost}
          comments={comments}/> : null

    )
  }
}

const mapStateToProps = ({ forum }) => ({ forum })

export default connect(
  mapStateToProps,
)(Post)
