import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import PostsListView from '../components/PostsListView'

class Category extends Component {
  componentDidMount() {
    const category = this.props.match.params.category;
    this.props.receivePostsForCategoryAsync(category)
  }

  componentDidUpdate(prevProps) {
    const category = this.props.match.params.category;
    if (category !== prevProps.match.params.category) {
      this.props.receivePostsForCategoryAsync(category)
    }
  }

  votePostAsync = (id, option) => {
    this.props.votePostAsync(id, option)
  }

  sortPostsByVote = () => {
    this.props.sortPostsByVote()
  }

  sortPostsByName = () => {
    this.props.sortPostsByName()
  }

  sortPostsByDate = () => {
    this.props.sortPostsByDate()
  }

  editPost = (id, title, body) => {
    this.props.updatePostAsync(id, title, body)
  }

  deletePost = (id) => {
    this.props.deletePostAsync(id)
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

const mapStateToProps = ({ postReducer }) => ({ posts: postReducer.posts })

export default connect(
  mapStateToProps,
  actions
)(Category)
