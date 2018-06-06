import React, { Component } from 'react'
import { formatDate } from '../utils/helpers'
import { connect } from 'react-redux'
import FaChevronUp from 'react-icons/lib/fa/chevron-up'
import FaChevronDown from 'react-icons/lib/fa/chevron-down'
import FaEdit from 'react-icons/lib/fa/edit'
import FaTrash from 'react-icons/lib/fa/trash-o'
import { Link } from 'react-router-dom'
import {
  receivePostsForm,
  startEditingPostsForm,
  onEditingPostsForm,
  onKeypressPostsForm,
  onBlurPostsForm
} from '../actions'

class PostsListView extends Component {
  state = {}

  componentDidMount() {
    const { posts } = this.props
    this.props.dispatch(receivePostsForm({}, posts))
  }

  componentDidUpdate(prevProps) {
    const { posts } = this.props
    if (posts !== prevProps.posts) {
      this.props.dispatch(receivePostsForm({}, posts))
    }
  }

  startEditing(post) {
    const { postsForm } = this.props
    this.props.dispatch(startEditingPostsForm(postsForm, post))
  }

  onChange(post, name, value) {
    const { postsForm } = this.props
    this.props.dispatch(onEditingPostsForm(postsForm, post, name, value))
  }

  handleKeyPress = (event, post) => {
    const { postsForm, editPost } = this.props
    if(event.key === 'Enter'){
      this.props.dispatch(onKeypressPostsForm(postsForm, post))
      editPost(post.id, postsForm[post.id].title, postsForm[post.id].body)
    }
  }

  onBlur(event, post) {
    const { postsForm } = this.props
    this.props.dispatch(onBlurPostsForm(postsForm, post))
  }

  render() {
    const {
      posts,
      postsForm,
      votePostAsync,
      sortPostsByVote,
      sortPostsByName,
      sortPostsByDate,
      deletePost
    } = this.props

    return (
      <div>
        <div className="post-options">
            <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
              Sort
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" onClick={() => sortPostsByVote()}>vote</a>
              <a className="dropdown-item" onClick={() => sortPostsByName()}>author</a>
              <a className="dropdown-item" onClick={() => sortPostsByDate()}>date</a>
            </div>
        </div>
        <div className='post-table'>
          <div className="row">
            <div className="col-md-1">votes</div>
            <div className="col-md-1">category</div>
            <div className="col-md-2">title</div>
            <div className="col-md-2">author</div>
            <div className="col-md-2">date</div>
            <div className="col-md-2"></div>
            <div className="col-md-2"></div>
          </div>
            {posts.map(post => (
              <div key={post.id} post={post}>
                <div className="row">
                  <div className="col-md-1">{post.voteScore}</div>
                  <div className="col-md-1">{post.category}</div>
                  <div className="col-md-2">
                    {
                      postsForm[post.id] && postsForm[post.id].status !== 'edit' ? (
                      <span>
                        <Link to={{ pathname: `/${post.category}/${post.id}`}}>{post.title}</Link>
                        ({post.commentCount})
                      </span>
                      ) :
                      <input
                        type="text"
                        className="input-text"
                        defaultValue={post.title}
                        name="title"
                        onChange={(e) => this.onChange(post, e.target.name, e.target.value)}
                        onBlur={(e) => this.onBlur(e, post)}
                        onKeyPress={(e) => this.handleKeyPress(e, post)}/>
                      }
                  </div>
                  <div className="col-md-2">{post.author}</div>
                  <div className="col-md-2">{formatDate(post.timestamp)}</div>
                  <div className="col-md-2">
                    <button
                      className="btn"
                      type="button"
                      onClick={() => votePostAsync(post.id, "upVote")}>
                      <FaChevronUp />
                    </button>
                    <button
                      className="btn"
                      type="button"
                      onClick={() => votePostAsync(post.id, "downVote")}>
                      <FaChevronDown />
                    </button>
                  </div>
                  <div className="col-md-2">
                    <button
                      className="btn btn-secondary button-space"
                      type="button"
                      onClick={() => this.startEditing(post)}>
                      <FaEdit/>
                    </button>
                    <button
                      className="btn btn-default"
                      type="button"
                      onClick={() => deletePost(post.id)}>
                      <FaTrash/>
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ postsFormReducer }) => ({ postsForm: postsFormReducer.postsForm })

export default connect(mapStateToProps)(PostsListView)
