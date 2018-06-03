import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  receivePostsForCategoryAsync
} from '../actions'
import PostsView from '../components/PostsView'

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
        <PostsView posts={posts}/>
      ) : <div className="no-content">No posts for this category.</div>
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
