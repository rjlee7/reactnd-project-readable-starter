import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  receivePostAsync,
  receiveCommentsAsync
} from '../actions'
import PostView from '../components/PostView'

class Post extends Component {
  state = {
  }

  componentDidMount() {
    let post_id = this.props.match.params.post_id
    this.props.dispatch(receivePostAsync(post_id))
    this.props.dispatch(receiveCommentsAsync(post_id))
  }

  render() {
    const { post } = this.props.forum
    const { comments } = this.props.forum

    return (
      post ? <PostView post={post} comments={comments}/> : null

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
)(Post)
