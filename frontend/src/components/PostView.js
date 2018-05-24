import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  receivePostAsync,
  receiveCommentsAsync,
  deletePostAsync,
  deleteCommentAsync,
  updateCommentAsync
} from '../actions'
import { formatDate } from '../utils/helpers'
import FaChevronUp from 'react-icons/lib/fa/chevron-up'
import FaChevronDown from 'react-icons/lib/fa/chevron-down'
import Loading from 'react-loading'

class PostView extends Component {
  state = {
  }

  componentDidMount() {
  }

  render() {
    const { post } = this.props
    return (
      <tr>
        <td><FaChevronUp /><FaChevronDown /></td>
        <td>{post.voteScore}</td>
        <td>{post.category}</td>
        <td><Link to={{
          pathname: `/${post.category}/${post.id}`,
          state: {
            category: post.category
          }
        }}>{post.title}</Link></td>
        <td>{post.author}</td>
        <td>{formatDate(post.timestamp)}</td>
      </tr>
    )
  }
}

export default PostView
