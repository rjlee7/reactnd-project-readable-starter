import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  receivePostAsync,
  receiveCommentsAsync,
  deletePostAsync,
  sortPostsByVote,
  sortPostsByName,
  sortPostsByDate
} from '../actions'
import { formatDate } from '../utils/helpers'
import FaChevronUp from 'react-icons/lib/fa/chevron-up'
import FaChevronDown from 'react-icons/lib/fa/chevron-down'
import FaSort from 'react-icons/lib/fa/sort'
import Loading from 'react-loading'
import CommentView from './CommentView'
import NewCommentView from './NewCommentView'
import $ from 'jquery';

class PostView extends Component {
  state = {
  }

  componentDidMount() {
    $('.collapse').collapse()
  }

  render() {
    const { post } = this.props
    const { comments } = this.props.forum
    console.log('post',post)
    return (
      <div className='post-table'>
        <div className="row">
          <div className="col-md-2">vote score</div>
          <div className="col-md-2">category</div>
          <div className="col-md-2">title</div>
          <div className="col-md-2">body</div>
          <div className="col-md-2">author</div>
          <div className="col-md-2">date</div>
        </div>
        <div className="row">
          <div className="col-md-2">{post.voteScore}</div>
          <div className="col-md-2">{post.category}</div>
          <div className="col-md-2">{post.title}</div>
          <div className="col-md-2">{post.body}</div>
          <div className="col-md-2">{post.author}</div>
          <div className="col-md-2">{formatDate(post.timestamp)}</div>
        </div>
        <div className="comment-block">
          {(comments && comments.length) ?  (
            <div className="row">
              <div className="col-md-2">vote score</div>
              <div className="col-md-2">body</div>
              <div className="col-md-2">author</div>
              <div className="col-md-2">date</div>
              <div className="col-md-2"></div>
              <div className="col-md-2"></div>
            </div>
          ) : null}
          {(comments && comments.length) ? comments.map(comment => (
            <CommentView key={comment.id} comment={comment}/>
          )) : <div>No comments for this post.</div>}
          <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#newComment" aria-expanded="false" aria-controls="newComment">
            New Comment
          </button>
          <div className="collapse" id="newComment">
            <div className="card card-body">
              <NewCommentView/>
            </div>
          </div>
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
)(PostView)
