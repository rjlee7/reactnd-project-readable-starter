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
  constructor(props) {
    super(props)
    this.votePostAsync = this.votePostAsync.bind(this)
    this.sortPostsByVote = this.sortPostsByVote.bind(this)
    this.sortPostsByName = this.sortPostsByName.bind(this)
    this.sortPostsByDate = this.sortPostsByDate.bind(this)
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

  componentDidMount() {
    this.props.dispatch(receivePostsAsync())
  }

  render() {
    const { posts } = this.props.forum

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

function mapStateToProps ({ forum }) {
  return {
    forum
  }
}

export default connect(
  mapStateToProps,
)(Main)
