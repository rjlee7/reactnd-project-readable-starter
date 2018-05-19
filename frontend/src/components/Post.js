import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { receivePostAsync } from '../actions'
import { formatDate } from '../utils/helpers'
import Loading from 'react-loading'

class Post extends Component {
  state = {
  }

  componentDidMount() {
    let id = this.props.match.params.id
    this.props.dispatch(receivePostAsync(id))
  }

  render() {
    const { post } = this.props.forum

    return (
      <div className='container'>

        <div className='post'>
          {post &&
          <ul>
            <li>{post.voteScore}</li>
            <li>{post.category}</li>
            <li>{post.title}</li>
            <li>{post.author}</li>
            <li>{formatDate(post.timestamp)}</li>
          </ul>
          }
          <div>Delete</div>
          <div>Edit</div>
          <div>Comments</div>
        </div>

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
)(Post)
