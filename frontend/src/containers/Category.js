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
import FaSort from 'react-icons/lib/fa/sort'
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
        <PostView posts={posts}/>
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
