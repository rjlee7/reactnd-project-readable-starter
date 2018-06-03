import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  receivePostsForCategoryAsync,
  sortPostsByVote,
  sortPostsByName,
  sortPostsByDate,
  votePostAsync
} from '../actions'
import PostsView from '../components/PostsView'

class Category extends Component {
  constructor(props) {
    super(props)
    this.votePostAsync = this.votePostAsync.bind(this)
    this.sortPostsByVote = this.sortPostsByVote.bind(this)
    this.sortPostsByName = this.sortPostsByName.bind(this)
    this.sortPostsByDate = this.sortPostsByDate.bind(this)
  }

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

  votePostAsync(id, option) {
    this.props.dispatch(votePostAsync(id, option))
  }

  sortPostsByVote() {
    this.props.dispatch(sortPostsByVote())
  }

  sortPostsByName() {
    this.props.dispatch(sortPostsByName())
  }

  sortPostsByDate() {
    this.props.dispatch(sortPostsByDate())
  }

  render() {
    const { posts } = this.props.forum
    return (
      posts && posts.length ? (
        <PostsView
          posts={posts}
          votePostAsync={this.votePostAsync}
          sortPostsByVote={this.sortPostsByVote}
          sortPostsByName={this.sortPostsByName}
          sortPostsByDate={this.sortPostsByDate}/>
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
