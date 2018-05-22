import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  receivePostAsync,
  receiveCommentsAsync,
  deletePostAsync,
  deleteCommentAsync,
  updateCommentAsync,
  voteCommentAsync
} from '../actions'
import { formatDate } from '../utils/helpers'
import FaChevronUp from 'react-icons/lib/fa/chevron-up'
import FaChevronDown from 'react-icons/lib/fa/chevron-down'
import Loading from 'react-loading'
import CommentView from '../components/CommentView'
import PostView from '../components/PostView'

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

  voteComment(id) {
    this.props.dispatch(voteCommentAsync(id))
  }

  render() {
    const { post } = this.props.forum
    const { comments } = this.props.forum

    console.log('post',post,'comments',comments)
    return (
      <div className='container'>

        <button onClick={this.deletePost}>Delete</button>
        <button onClick={this.editPost}>Edit</button>
        <div className='post'>
          {post &&
          <table>
            <tbody>
              <PostView key={post.id} post={post}/>
            </tbody>
          </table>
          }
          {(comments && comments.length) &&
            comments.map((comment) => (
              <CommentView
                key={comment.id}
                comment={comment}
                deleteComment={this.deleteComment}
                editComment={this.editComment}
                voteComment={this.voteComment}/>
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
