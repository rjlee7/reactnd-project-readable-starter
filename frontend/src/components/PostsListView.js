import React, { Component } from 'react'
import { formatDate } from '../utils/helpers'
import FaChevronUp from 'react-icons/lib/fa/chevron-up'
import FaChevronDown from 'react-icons/lib/fa/chevron-down'
import FaEdit from 'react-icons/lib/fa/edit'
import FaTrash from 'react-icons/lib/fa/trash-o'
import { Link } from 'react-router-dom'

class PostsListView extends Component {
  state = {}

  startEditing(id) {
    this.setState({[id]:{status: 'edit'}})
  }

  onChange(id, name, value) {
    this.setState({[id]:{[name]: value}})
  }

  handleKeyPress = (event, id) => {
    const { editPost } = this.props
    if(event.key === 'Enter'){
      this.setState({[id]:{status: 'view'}})
      editPost(id, this.state[id].title, this.state[id].body)
    }
  }

  setPostState = (posts) => {
    let obj = {}
    posts.forEach(a => {
      if(!obj[a.id]) obj[a.id] = {}
      obj[a.id].status = 'view'
      obj[a.id].title = a.title
      obj[a.id].body = a.body
    })
    this.setState(obj)
  }

  componentDidMount() {
    const { posts } = this.props
    this.setPostState(posts)
  }

  componentDidUpdate(prevProps) {
    const { posts } = this.props
    if (posts !== prevProps.posts) {
      this.setPostState(posts)
    }
  }


  render() {
    const {
      posts,
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
                      this.state[post.id] && this.state[post.id].status === 'view' ? (
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
                        onChange={(e) => this.onChange(post.id, e.target.name, e.target.value)}
                        onBlur={() => this.setState({[post.id]:{status: 'view'}})}
                        onKeyPress={(e) => this.handleKeyPress(e, post.id)}/>
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
                      onClick={() => this.startEditing(post.id)}>
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

export default PostsListView
