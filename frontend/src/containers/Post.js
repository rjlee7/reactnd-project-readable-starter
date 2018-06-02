import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  receivePostAsync,
  deletePostAsync,
} from '../actions'
import {
  receivePostsForCategoryAsync,
  sortPostsByName,
  sortPostsByDate,
  sortPostsByVote
} from '../actions'
import { formatDate } from '../utils/helpers'
import FaChevronUp from 'react-icons/lib/fa/chevron-up'
import FaChevronDown from 'react-icons/lib/fa/chevron-down'
import FaSort from 'react-icons/lib/fa/sort'
import Loading from 'react-loading'
import CommentView from '../components/CommentView'
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
