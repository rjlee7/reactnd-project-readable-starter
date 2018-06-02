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
      <div>
        {comment ? (
        <div className="row">
          <div className="col-md-2">
            <FaChevronUp onClick={() => voteComment(comment.id)}/>
            <FaChevronDown onClick={() => voteComment(comment.id)}/>
          </div>
          <div className="col-md-2">{comment.voteScore}</div>
          <div className="col-md-2">{comment.body}</div>
          <div className="col-md-2">{comment.author}</div>
          <div className="col-md-2">{formatDate(comment.timestamp)}</div>
          <div className="col-md-2"><button onClick={() => deleteComment(comment.id)}>Delete</button><button onClick={() => editComment(comment.id)}>Edit</button></div>
        </div>) : null}
      </div>
    )
  }
}

export default CommentView
