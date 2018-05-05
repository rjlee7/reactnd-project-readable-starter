import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { receiveCategoriesAsync, receivePostsAsync, receivePostAsync } from '../actions'
import { capitalize, formatDate } from '../utils/helpers'
import Modal from 'react-modal'
import Loading from 'react-loading'

class Post extends Component {
  state = {
    loadingPost: false,
    categories: null
  }

  componentDidMount() {
    console.log('this.props',this.props)
  }
  getPostDetails = (category, id) => {
    this.props.dispatch(receivePostAsync(category, id))
  }

  render() {
    const { loadingPost } = this.state
    const { categories, posts } = this.props.forum

    return (
      <div className='container'>

        <div className='forum'>
          <div>id</div>
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
