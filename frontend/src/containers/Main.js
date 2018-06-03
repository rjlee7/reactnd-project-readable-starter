import React, { Component } from 'react'
import { connect } from 'react-redux'
import { receivePostsAsync } from '../actions'
import PostsView from '../components/PostsView'

class Main extends Component {
  componentDidMount() {
    this.props.dispatch(receivePostsAsync())
  }

  render() {
    const { posts } = this.props.forum

    return (
      <div className='forum'>
        <PostsView posts={posts}/>
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
