import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { receivePostsForCategoryAsync } from '../actions'
import FaChevronUp from 'react-icons/lib/fa/chevron-up'
import FaChevronDown from 'react-icons/lib/fa/chevron-down'
import { formatDate } from '../utils/helpers'
import PostView from '../components/PostView'

class Category extends Component {
  componentDidMount() {
    console.log('this.props.match.params',this.props.match.params)
    let id = this.props.match.params.id;
    this.props.dispatch(receivePostsForCategoryAsync(id))
  }

  componentDidUpdate(prevProps) {
    let id = this.props.match.params.id;
    if (id !== prevProps.match.params.id) {
      this.props.dispatch(receivePostsForCategoryAsync(id))
    }
  }

  render() {
    const { posts } = this.props.forum
    return (
      <table className='forum-table'>
        <tbody>
          {posts.map((post) => (
            <PostView key={post.id} post={post}/>
          ))}
        </tbody>
      </table>

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
