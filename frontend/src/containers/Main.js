import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostsListView from '../components/PostsListView'
import {
  receivePostsAsync,
  sortPostsByVote,
  sortPostsByName,
  sortPostsByDate,
  votePostAsync,
  updatePostAsync,
  deletePostAsync
} from '../actions'

class Main extends Component {
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

  componentDidMount() {
    this.props.dispatch(receivePostsAsync())
  }

  render() {
    const { posts } = this.props

    return (
      <div className='forum'>
        <PostsListView
          posts={posts}
          votePostAsync={this.votePostAsync}
          sortPostsByVote={this.sortPostsByVote}
          sortPostsByName={this.sortPostsByName}
          sortPostsByDate={this.sortPostsByDate}
          editPost={this.editPost}
          deletePost={this.deletePost}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ forum }) => ({ posts: forum.posts })

export default connect(
  mapStateToProps,
)(Main)
