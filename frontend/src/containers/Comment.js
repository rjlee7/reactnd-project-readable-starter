import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { formatDate } from '../utils/helpers'
import FaChevronUp from 'react-icons/lib/fa/chevron-up'
import FaChevronDown from 'react-icons/lib/fa/chevron-down'
import FaEdit from 'react-icons/lib/fa/edit'
import FaTrash from 'react-icons/lib/fa/trash-o'

class Comment extends Component {
  state = {
    status: 'view',
    body: null
  }

  componentDidMount() {
    const { commentDetail } = this.props
    this.setState({ body: commentDetail.body })
  }

  editComment() {
    this.setState({ status: 'edit' })
  }

  onEdit(value) {
    this.setState({ body: value })
  }

  handleKeyPress = (event) => {
    const { commentDetail } = this.props
    const { body } = this.state
    if(event.key === 'Enter'){
      this.setState({ status: 'view' })
      this.props.updateCommentAsync(commentDetail.id, (new Date()).getTime(), body)
    }
  }

  deleteComment(id) {
    this.props.deleteCommentAsync(id)
  }

  render() {
    const { status, body } = this.state
    const { commentDetail } = this.props

    return (
      <div>
        {commentDetail ? (
        <div className="row">
          <div className="col-md-2">{commentDetail.voteScore}</div>
          <div className="col-md-2">{
            status === 'view' ? body :
            <input
              type="text"
              className="input-text"
              defaultValue={body}
              onChange={(e) => this.onEdit(e.target.value)}
              onBlur={() => this.setState({status: 'view'})}
              onKeyPress={this.handleKeyPress}/>
            }
          </div>
          <div className="col-md-2">{commentDetail.author}
          </div>
          <div className="col-md-2">{formatDate(commentDetail.timestamp)}</div>
          <div className="col-md-2">
            <button
              className="btn btn-secondary button-space"
              type="button"
              onClick={() => this.editComment(commentDetail.id)}>
              <FaEdit/>
            </button>
            <button
              className="btn btn-default"
              type="button"
              onClick={() => this.deleteComment(commentDetail.id)}>
              <FaTrash/>
            </button>
          </div>
          <div className="col-md-2">
            <button
              className="btn"
              type="button"
              onClick={() => this.props.voteCommentAsync(commentDetail.id, "upVote")}>
              <FaChevronUp/>
            </button>
            <button
              className="btn"
              type="button"
              onClick={() => this.props.voteCommentAsync(commentDetail.id, "upVote")}>
              <FaChevronDown/>
            </button>
          </div>
        </div>) : null}
      </div>
    )
  }
}


export default connect(null, actions)(Comment)
