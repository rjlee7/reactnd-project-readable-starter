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

class PostsView extends Component {
  state = {
  }

  componentDidMount() {
  }

  handleChange() {
    this.props.dispatch(sortPostsByVote())
    this.props.dispatch(sortPostsByName())
    this.props.dispatch(sortPostsByDate())
  }

  render() {
    const { posts } = this.props
    const { comments } = this.props.forum
    const options = ['vote','author','date'];

    return (
      <div>
        <div className="post-options">
          <span>sort by </span><select className="sort-control" id="sort" onChange={this.handleChange}>
            {options.map(option => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="post-options">
          <Link to={{
            pathname: `/new-post`
          }}><button className="btn btn-primary" type="button">New Post</button></Link>
        </div>
        <div className='post-table'>
          <div className="row">
            <div className="col-md-2">vote score</div>
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
                  <div className="col-md-2"><Link to={{
                    pathname: `/${post.category}/${post.id}`
                  }}>{post.title}</Link></div>
                  <div className="col-md-2">{post.author}</div>
                  <div className="col-md-2">{formatDate(post.timestamp)}</div>
                  <div className="col-md-2"><button className="btn" type="button"><FaChevronUp /></button><button className="btn" type="button"><FaChevronDown /></button></div>
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
