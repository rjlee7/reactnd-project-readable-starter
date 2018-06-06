import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostsListView from '../components/PostsListView'
import * as actions from '../actions'

class Main extends Component {
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

  componentDidMount() {
    this.props.receivePostsAsync()
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

const mapStateToProps = ({ postReducer }) => ({ posts: postReducer.posts })

export default connect(
  mapStateToProps,
  actions
)(Main)
