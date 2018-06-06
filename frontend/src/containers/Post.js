import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'
import PostView from '../components/PostView'

class Post extends Component {
  componentDidMount() {
    const post_id = this.props.match.params.post_id
    this.props.receivePostAsync(post_id)
    this.props.receiveCommentsAsync(post_id)
  }

  deletePost = (id) => {
    this.props.deletePostAsync(id)
    this.props.history.push("/")
  }

  editPost = (id, title, body) => {
    this.props.updatePostAsync(id, title, body)
  }

  render() {
    const { post, comments, error } = this.props

    return (
      <div>
        {error && <Redirect to="/notfound"/>}
        {post ?
        <PostView
          post={post}
          editPost={this.editPost}
          deletePost={this.deletePost}
          comments={comments}/> : null
        }
      </div>

    )
  }
}

const mapStateToProps = ({ postReducer, commentReducer, errorReducer }) => {
  return { post: postReducer.post, comments: commentReducer.comments, error: errorReducer.error }
}

export default connect(
  mapStateToProps,
  actions
)(Post)
