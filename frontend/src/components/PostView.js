import React, { Component } from 'react'
import { formatDate } from '../utils/helpers'
import FaAngleDown from 'react-icons/lib/fa/angle-down'
import Comment from '../containers/Comment'
import NewComment from '../containers/NewComment'
import { connect } from 'react-redux'
import {
  receivePostForm,
  startEditingPostForm,
  onEditingPostForm,
  onKeypressPostsForm,
  onBlurPostsForm
} from '../actions'

class PostView extends Component {
  state = {}

  componentDidMount() {
    const { post } = this.props
    this.props.dispatch(receivePostForm({}, post))
  }

  componentDidUpdate(prevProps) {
    const { post } = this.props
    if (post !== prevProps.post) {
      this.props.dispatch(receivePostForm({}, post))
    }
  }

  startEditing(post) {
    const { postForm } = this.props
    this.props.dispatch(startEditingPostForm(postForm, post))
  }

  onChange(post, name, value) {
    const { postForm } = this.props
    this.props.dispatch(onEditingPostForm(postForm, post, name, value))
  }

  handleKeyPress = (event, post) => {
    const { postForm, editPost } = this.props
    if(event.key === 'Enter'){
      this.props.dispatch(onKeypressPostsForm(postForm, post))
      editPost(post.id, postForm[post.id].title, postForm[post.id].body)
    }
  }

  onBlur(event, post) {
    const { postForm } = this.props
    this.props.dispatch(onBlurPostsForm(postForm, post))
  }

  render() {
    const {
      post,
      postForm,
      comments,
      deletePost
    } = this.props

    return (
      <div className='post-table'>
        <div className="post-options">
          <button
            className="btn btn-secondary button-space"
            type="button"
            onClick={() => this.startEditing(post)}>Edit Post</button>
          <button
            className="btn btn-default"
            type="button"
            onClick={() => deletePost(post.id)}>Delete Post</button>
        </div>
        <div>
          <h3>{
            postForm[post.id] && postForm[post.id].status !== 'edit' ? post.title :
            <input
              type="text"
              className="input-text"
              defaultValue={post.title}
              name="title"
              onChange={(e) => this.onChange(post, e.target.name, e.target.value)}
              onBlur={(e) => this.onBlur(e, post)}
              onKeyPress={(e) => this.handleKeyPress(e, post)}/>
            }</h3>
          <p className="post-details">category: {post.category}</p>
          <p className="post-details">written by {post.author} on {formatDate(post.timestamp)}</p>
          <p className="post-details">votes: {post.voteScore}</p>
          <p className="post-details">{
            postForm[post.id] && postForm[post.id].status !== 'edit' ? post.body :
            <input
              type="text"
              className="input-text"
              defaultValue={post.body}
              name="body"
              onChange={(e) => this.onChange(post, e.target.name, e.target.value)}
              onBlur={(e) => this.onBlur(e, post)}
              onKeyPress={(e) => this.handleKeyPress(e, post)}/>
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
            <Comment
              key={comment.id}
              commentDetail={comment}/>
          )) : <div className="no-content">No comments for this post.</div>}
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="collapse"
            data-target="#newComment"
            aria-expanded="false"
            aria-controls="newComment">
            New Comment <FaAngleDown/>
          </button>
          <div className="collapse" id="newComment">
            <div className="card card-body">
              <NewComment post={post}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ postFormReducer }) => ({ postForm: postFormReducer.postForm })

export default connect(mapStateToProps)(PostView)
