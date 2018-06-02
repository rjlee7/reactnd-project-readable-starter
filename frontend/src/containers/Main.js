import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { receivePostsAsync } from '../actions'
import { formatDate } from '../utils/helpers'
import FaChevronUp from 'react-icons/lib/fa/chevron-up'
import FaChevronDown from 'react-icons/lib/fa/chevron-down'
import FaSort from 'react-icons/lib/fa/sort'
import NewPostView from '../components/NewPostView'
import PostsView from '../components/PostsView'

class Main extends Component {
  state = {
    loadingPost: false,
  }

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
