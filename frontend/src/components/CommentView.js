import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteCommentAsync, updateCommentAsync, voteCommentAsync } from '../actions'
import { formatDate } from '../utils/helpers'
import FaChevronUp from 'react-icons/lib/fa/chevron-up'
import FaChevronDown from 'react-icons/lib/fa/chevron-down'
import Loading from 'react-loading'

class CommentView extends Component {
  render() {
    const { comment } = this.props
    const { deleteComment } = this.props
    const { editComment } = this.props
    const { voteComment } = this.props

    return (
          <ul>
            <li>
              <FaChevronUp onClick={() => voteComment(comment.id)}/>
              <FaChevronDown onClick={() => voteComment(comment.id)}/>
            </li>
            <li>{comment.voteScore}</li>
            <li>{comment.body}</li>
            <li>{comment.author}</li>
            <li>{formatDate(comment.timestamp)}</li>
            <li><button onClick={() => deleteComment(comment.id)}>Delete</button></li>
            <li><button onClick={() => editComment(comment.id)}>Edit</button></li>
          </ul>
    )
  }
}

export default CommentView
