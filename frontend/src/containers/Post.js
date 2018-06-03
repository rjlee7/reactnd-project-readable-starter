import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  receivePostAsync,
} from '../actions'
import PostView from '../components/PostView'

class Post extends Component {
  state = {
  }

  componentDidMount() {
    let post_id = this.props.match.params.post_id
    this.props.dispatch(receivePostAsync(post_id))
  }

  render() {
    const { post } = this.props.forum

    return (
      post ? <PostView post={post}/> : null

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
