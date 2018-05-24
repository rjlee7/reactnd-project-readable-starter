import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  receivePostsForCategoryAsync,
  sortPostsByName,
  sortPostsByDate,
  sortPostsByVote
} from '../actions'
import FaChevronUp from 'react-icons/lib/fa/chevron-up'
import FaChevronDown from 'react-icons/lib/fa/chevron-down'
import { formatDate } from '../utils/helpers'
import PostView from '../components/PostView'

class Category extends Component {
  componentDidMount() {
    let category = this.props.match.params.category;
    this.props.dispatch(receivePostsForCategoryAsync(category))
  }

  componentDidUpdate(prevProps) {
    let category = this.props.match.params.category;
    if (category !== prevProps.match.params.category) {
      this.props.dispatch(receivePostsForCategoryAsync(category))
    }
  }

  render() {
    const { posts } = this.props.forum
    return (
      posts && posts.length ? (
        <table className='forum-table'>
          <thead>
            <tr>
              <th onClick={()=>{this.props.dispatch(sortPostsByVote())}}>vote score</th>
              <th>category</th>
              <th>title</th>
              <th onClick={()=>{this.props.dispatch(sortPostsByName())}}>author</th>
              <th onClick={()=>{this.props.dispatch(sortPostsByDate())}}>date</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <PostView key={post.id} post={post}/>
            ))}
          </tbody>
        </table>
      ) : 'No posts for this category.'

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
)(Category)
