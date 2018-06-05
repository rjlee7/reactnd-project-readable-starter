import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  receivePostsForCategoryAsync,
  sortPostsByVote,
  sortPostsByName,
  sortPostsByDate,
  votePostAsync,
  updatePostAsync,
  deletePostAsync
} from '../actions'
import PostsListView from '../components/PostsListView'

class Category extends Component {
  componentDidMount() {
    const category = this.props.match.params.category;
    this.props.dispatch(receivePostsForCategoryAsync(category))
  }

  componentDidUpdate(prevProps) {
    const category = this.props.match.params.category;
    if (category !== prevProps.match.params.category) {
      this.props.dispatch(receivePostsForCategoryAsync(category))
    }
  }

  votePostAsync = (id, option) => {
    this.props.dispatch(votePostAsync(id, option))
  }

  sortPostsByVote = () => {
    this.props.dispatch(sortPostsByVote())
  }

  sortPostsByName = () => {
    this.props.dispatch(sortPostsByName())
  }

  sortPostsByDate = () => {
    this.props.dispatch(sortPostsByDate())
  }

  editPost = (id, title, body) => {
    this.props.dispatch(updatePostAsync(id, title, body))
  }

  deletePost = (id) => {
    this.props.dispatch(deletePostAsync(id))
  }

  render() {
    const { posts } = this.props

    return (
      posts && posts.length ? (
        <PostsListView
          posts={posts}
          votePostAsync={this.votePostAsync}
          sortPostsByVote={this.sortPostsByVote}
          sortPostsByName={this.sortPostsByName}
          sortPostsByDate={this.sortPostsByDate}
          editPost={this.editPost}
          deletePost={this.deletePost}
        />
      ) : <div className="no-content">No posts for this category.</div>
    )
  }
}

const mapStateToProps = ({ forum }) => ({ posts: forum.posts })

export default connect(
  mapStateToProps,
)(Category)
