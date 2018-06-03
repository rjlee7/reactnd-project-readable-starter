import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  receiveCommentsAsync,
} from '../actions'
import { formatDate } from '../utils/helpers'
import FaChevronUp from 'react-icons/lib/fa/chevron-up'
import FaChevronDown from 'react-icons/lib/fa/chevron-down'
import FaSort from 'react-icons/lib/fa/sort'
import Loading from 'react-loading'
import CommentView from '../components/CommentView'
import PostView from '../components/PostView'

class Comment extends Component {
  state = {
  }

  componentDidMount() {
    let post_id = this.props.match.params.post_id
    this.props.dispatch(receiveCommentsAsync(post_id))
  }

  deleteComment() {
    let post_id = this.props.match.params.post_id
    // this.props.dispatch(deleteCommentAsync(post_id))
  }

  editComment() {
    let post_id = this.props.match.params.post_id
  }


  render() {
    const { comments } = this.props.forum
    console.log('comments',comments)
    return (
      <div className='container'>
        {(comments && comments.length) ?
          comments.map(comment => (
            <CommentView key={comment.id} comment={comment}/>
          )) : <div className="no-content">No comments for this post.</div>}
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
)(Comment)
