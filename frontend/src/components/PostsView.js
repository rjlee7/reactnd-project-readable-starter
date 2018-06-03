import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  sortPostsByVote,
  sortPostsByName,
  sortPostsByDate,
  votePostAsync
} from '../actions'
import { formatDate } from '../utils/helpers'
import FaChevronUp from 'react-icons/lib/fa/chevron-up'
import FaChevronDown from 'react-icons/lib/fa/chevron-down'

class PostsView extends Component {
  state = {
  }

  componentDidMount() {
  }

  render() {
    const { posts } = this.props

    return (
      <div>
        <div className="post-options">
            <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
              Sort
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" onClick={() => this.props.dispatch(sortPostsByVote())}>vote</a>
              <a className="dropdown-item" onClick={() => this.props.dispatch(sortPostsByName())}>author</a>
              <a className="dropdown-item" onClick={() => this.props.dispatch(sortPostsByDate())}>date</a>
            </div>
            <Link to={{
            pathname: `/new-post`
          }}><button className="btn btn-primary" type="button">New Post</button></Link>
        </div>
        <div className='post-table'>
          <div className="row">
            <div className="col-md-2">votes</div>
            <div className="col-md-2">category</div>
            <div className="col-md-2">title</div>
            <div className="col-md-2">author</div>
            <div className="col-md-2">date</div>
            <div className="col-md-2">vote</div>
          </div>
            {posts.map(post => (
              <div key={post.id} post={post}>
                <div className="row">
                  <div className="col-md-2">{post.voteScore}</div>
                  <div className="col-md-2">{post.category}</div>
                  <div className="col-md-2">
                    <Link to={{
                      pathname: `/${post.category}/${post.id}`
                    }}>{post.title}</Link>
                  </div>
                  <div className="col-md-2">{post.author}</div>
                  <div className="col-md-2">{formatDate(post.timestamp)}</div>
                  <div className="col-md-2">
                    <button
                      className="btn"
                      type="button"
                      onClick={() => this.props.dispatch(votePostAsync(post.id, "upVote"))}>
                      <FaChevronUp />
                    </button>
                    <button
                      className="btn"
                      type="button"
                      onClick={() => this.props.dispatch(votePostAsync(post.id, "downVote"))}>
                      <FaChevronDown />
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

function mapStateToProps ({ forum }) {
  return {
    forum
  }
}

export default connect(
  mapStateToProps,
)(PostsView)
