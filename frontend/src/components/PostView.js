import React, { Component } from 'react'
import { formatDate } from '../utils/helpers'
import FaAngleDown from 'react-icons/lib/fa/angle-down'
import Comment from '../containers/Comment'
import NewComment from '../containers/NewComment'

class PostView extends Component {
  state = {
    status: 'view',
    title: null,
    body: null
  }

  componentDidMount() {
    const { post } = this.props
    this.setState({
      title: post.title,
      body: post.body
    })
  }

  startEditing() {
    this.setState({
      status: 'edit'
    })
  }

  onChange(name, value) {
    this.setState({
      [name]: value
    })
  }

  handleKeyPress = (event) => {
    const { post, editPost } = this.props
    const { title, body } = this.state
    if(event.key === 'Enter'){
      this.setState({
        status: 'view'
      })
      editPost(post.id, title, body)
    }
  }

  render() {
    const { post, comments, deletePost } = this.props
    const { status } = this.state
    return (
      <div className='post-table'>
        <div className="post-options">
          <button
            className="btn btn-secondary button-space"
            type="button"
            onClick={() => this.startEditing()}>Edit Post</button>
          <button
            className="btn btn-default"
            type="button"
            onClick={() => deletePost(post.id)}>Delete Post</button>
        </div>
        <div>
          <h3>{
            status === 'view' ? post.title :
            <input
              type="text"
              className="input-text"
              defaultValue={post.title}
              name="title"
              onChange={(e) => this.onChange(e.target.name, e.target.value)}
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
              onChange={(e) => this.onChange(e.target.name, e.target.value)}
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

export default PostView
