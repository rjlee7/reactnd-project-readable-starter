import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  deletePostAsync,
} from '../actions'
import { formatDate } from '../utils/helpers'
import FaAngleDown from 'react-icons/lib/fa/angle-down'
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
        <div className="post-options">
          <button className="btn btn-secondary button-space" type="button">Edit Post</button>
          <button
            className="btn btn-default"
            type="button"
            onClick={() => this.props.dispatch(deletePostAsync(post.id))}>Delete Post</button>
        </div>
        <div>
          <h3>{post.title}</h3>
          <p className="post-details">category: {post.category}</p>
          <p className="post-details">written by {post.author} on {formatDate(post.timestamp)}</p>
          <p className="post-details">votes: {post.voteScore}</p>
          <p className="post-details">{post.body}</p>
        </div>
        <div className="comment-block">
          {(comments && comments.length) ?  (
            <div className="row">
              <div className="col-md-2">votes</div>
              <div className="col-md-2">comment</div>
              <div className="col-md-2">author</div>
              <div className="col-md-2">date</div>
              <div className="col-md-2"></div>
              <div className="col-md-2"></div>
            </div>
          ) : null}
          {(comments && comments.length) ? comments.map(comment => (
            <CommentView key={comment.id} comment={comment}/>
          )) : <div className="no-content">No comments for this post.</div>}
          <button
            className="btn btn-primary"
            type="button"
            data-toggle="collapse"
            data-target="#newComment"
            aria-expanded="false"
            aria-controls="newComment">
            New Comment <FaAngleDown/>
          </button>
          <div className="collapse" id="newComment">
            <div className="card card-body">
              <NewCommentView post={post}/>
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
