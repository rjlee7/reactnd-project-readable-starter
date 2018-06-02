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

  render() {
    const { posts } = this.props
    const { comments } = this.props.forum

    return (
      <div className='post-table'>
        <div className="row">
          <div className="col-md-2">vote</div>
          <div className="col-md-2" onClick={()=>{this.props.dispatch(sortPostsByVote())}}>vote score<FaSort /></div>
          <div className="col-md-2">category</div>
          <div className="col-md-2">title</div>
          <div className="col-md-2" onClick={()=>{this.props.dispatch(sortPostsByName())}}>author<FaSort /></div>
          <div className="col-md-2" onClick={()=>{this.props.dispatch(sortPostsByDate())}}>date<FaSort /></div>
        </div>
          {posts.map(post => (
            <div key={post.id} post={post}>
              <div className="row">
                <div className="col-md-2"><FaChevronUp /><FaChevronDown /></div>
                <div className="col-md-2">{post.voteScore}</div>
                <div className="col-md-2">{post.category}</div>
                <div className="col-md-2"><Link to={{
                  pathname: `/${post.category}/${post.id}`
                }}>{post.title}</Link></div>
                <div className="col-md-2">{post.author}</div>
                <div className="col-md-2">{formatDate(post.timestamp)}</div>
              </div>
              <div className="row">
                <div className="col-md-2"><Link to={{
                  pathname: `/${post.category}/${post.id}/new-comment`
                }}>write comment</Link></div>
                <div className="col-md-2"><Link to={{
                  pathname: `/${post.category}/${post.id}/comments`
                }}>view comments</Link></div>
              </div>
            </div>
          ))}
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
