import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostsView from '../components/PostsView'
import {
  receivePostsAsync,
  sortPostsByVote,
  sortPostsByName,
  sortPostsByDate,
  votePostAsync
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

  componentDidMount() {
    this.props.dispatch(receivePostsAsync())
  }

  render() {
    const { posts } = this.props

    return (
      <div className='forum'>
        <PostsView
          posts={posts}
          votePostAsync={this.votePostAsync}
          sortPostsByVote={this.sortPostsByVote}
          sortPostsByName={this.sortPostsByName}
          sortPostsByDate={this.sortPostsByDate}/>
      </div>
    )
  }
}

const mapStateToProps = ({ forum }) => ({ posts: forum.posts })

export default connect(
  mapStateToProps,
)(Main)
