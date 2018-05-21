import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { receivePostAsync, receiveCommentsAsync, deletePostAsync, deleteCommentAsync, updateCommentAsync } from '../actions'
import { formatDate } from '../utils/helpers'
import FaChevronUp from 'react-icons/lib/fa/chevron-up'
import FaChevronDown from 'react-icons/lib/fa/chevron-down'
import Loading from 'react-loading'

class Post extends Component {
  state = {
  }

  componentDidMount() {
    let id = this.props.match.params.id
    this.props.dispatch(receivePostAsync(id))
    this.props.dispatch(receiveCommentsAsync(id))
  }

  deletePost() {
    let id = this.props.match.params.id
    this.props.dispatch(deletePostAsync(id))
  }

  editPost() {
    let id = this.props.match.params.id
    // this.props.dispatch(deletePostAsync(id))
  }

  deleteComment(id) {
    this.props.dispatch(deleteCommentAsync(id))
  }

  editComment(id) {
    this.props.dispatch(updateCommentAsync(id))
  }

  render() {
    const { post } = this.props.forum
    const { comments } = this.props.forum
    return (
      <div className='container'>

        <button onClick={this.deletePost}>Delete</button>
        <button onClick={this.editPost}>Edit</button>
        <div className='post'>
          {post &&
          <ul>
            <li>{post.voteScore}</li>
            <li>{post.category}</li>
            <li>{post.title}</li>
            <li>{post.author}</li>
            <li>{formatDate(post.timestamp)}</li>
          </ul>
          }
          {(comments && comments.length) &&
            comments.map((comment) => (
              <ul key={comment.id}>
                <li><FaChevronUp /><FaChevronDown /></li>
                <li>{comment.voteScore}</li>
                <li>{comment.body}</li>
                <li>{comment.author}</li>
                <li>{formatDate(comment.timestamp)}</li>
                <li><button onClick={() => this.deleteComment(comment.id)}>Delete</button></li>
                <li><button onClick={() => this.editComment(comment.id)}>Edit</button></li>
              </ul>
            ))
          }
        </div>

      </div>
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
