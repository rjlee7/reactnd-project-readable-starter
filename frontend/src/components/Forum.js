import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import { receiveCategoriesAsync, receivePostsAsync, receivePostAsync } from '../actions'
import { capitalize, formatDate } from '../utils/helpers'
import FaChevronUp from 'react-icons/lib/fa/chevron-up'
import FaChevronDown from 'react-icons/lib/fa/chevron-down'
import Modal from 'react-modal'
import Loading from 'react-loading'
import Post from './Post'
import NewPost from './NewPost'

class Forum extends Component {
  state = {
    newPostModalOpen: false,
    loadingPost: false,
    categories: null
  }

  componentDidMount() {
    this.props.dispatch(receivePostsAsync())
  }
  getPostDetails = (category, id) => {
    this.props.dispatch(receivePostAsync(category, id))
  }
  newPostModal = () => this.setState(() => ({ newPostModalOpen: true }))
  newPostModal = () => this.setState(() => ({ newPostModalOpen: false }))
  generateNewPost = () => {
    return this.props.calendar.reduce((result, { meals }) => {
      const { breakfast, lunch, dinner } = meals

      breakfast && result.push(breakfast)
      lunch && result.push(lunch)
      dinner && result.push(dinner)

      return result
    }, [])
    .reduce((ings, { ingredientLines }) => ings.concat(ingredientLines), [])
  }
  render() {
    const { loadingPost, newPostModalOpen } = this.state
    const { categories, posts } = this.props.forum

    return (
      <div>

        <div className='forum'>
          <table className='forum-table'>
            <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td><FaChevronUp /><FaChevronDown /></td>
                <td>{post.voteScore}</td>
                <td>{post.category}</td>
                <td><Link to={`/post/${post.id}`}>{post.title}</Link></td>
                <td>{post.author}</td>
                <td>{formatDate(post.timestamp)}</td>
              </tr>
            ))}
          </tbody>
          </table>
        </div>

      <Modal
        className='modal'
        overlayClassName='overlay'
        isOpen={newPostModalOpen}
        onRequestClose={this.newPostModal}
        contentLabel='Modal'
      >
        {newPostModalOpen && <NewPost list={this.generateNewPost()}/>}
      </Modal>
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
)(Forum)
