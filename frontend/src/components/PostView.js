import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  updatePostAsync,
  deletePostAsync,
} from '../actions'
import { formatDate } from '../utils/helpers'
import FaAngleDown from 'react-icons/lib/fa/angle-down'
import CommentView from './CommentView'
import NewCommentView from './NewCommentView'
import $ from 'jquery';

class PostView extends Component {
  state = {
    status: 'view',
    title: null,
    body: null
  }

  componentDidMount() {
    $('.collapse').collapse()
    const { post } = this.props
    this.setState({
      title: post.title,
      body: post.body
    })
  }

  editPost() {
    this.setState({
      status: 'edit'
    })
  }

  onEdit(name, value) {
    this.setState({
      [name]: value
    })
  }

  handleKeyPress = (event) => {
    const { post } = this.props
    const { title, body } = this.state
    if(event.key === 'Enter'){
      this.setState({
        status: 'view'
      })
      this.props.dispatch(updatePostAsync(post.id, title, body))
    }
  }

  render() {
    const { post, comments } = this.props
    const { status } = this.state
    return (
      <div className='post-table'>
        <div className="post-options">
          <button
            className="btn btn-secondary button-space"
            type="button"
            onClick={() => this.editPost(post.id)}>Edit Post</button>
          <button
            className="btn btn-default"
            type="button"
            onClick={() => this.props.dispatch(deletePostAsync(post.id))}>Delete Post</button>
        </div>
        <div>
          <h3>{
            status === 'view' ? post.title :
            <input
              type="text"
              className="input-text"
              defaultValue={post.title}
              name="title"
              onChange={(e) => this.onEdit(e.target.name, e.target.value)}
              onBlur={() => this.setState({status: 'view'})}
              onKeyPress={this.handleKeyPress}/>
            }</h3>
          <p className="post-details">category: {post.category}</p>
          <p className="post-details">written by {post.author} on {formatDate(post.timestamp)}</p>
          <p className="post-details">votes: {post.voteScore}</p>
          <p className="post-details">{
            status === 'view' ? post.body :
            <input
              type="text"
              className="input-text"
              defaultValue={post.body}
              name="body"
              onChange={(e) => this.onEdit(e.target.name, e.target.value)}
              onBlur={() => this.setState({status: 'view'})}
              onKeyPress={this.handleKeyPress}/>
            }</p>
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
