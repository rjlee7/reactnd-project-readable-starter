import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import { receiveCategoriesAsync, receivePostsAsync, receivePostAsync } from '../actions'
import { capitalize, formatDate } from '../utils/helpers'
import FaChevronUp from 'react-icons/lib/fa/chevron-up'
import FaChevronDown from 'react-icons/lib/fa/chevron-down'
import Modal from 'react-modal'
import Loading from 'react-loading'
import Forum from './Forum'
import Categories from './Categories'
import Post from './Post'
import NewPost from './NewPost'

class App extends Component {
  state = {
    newPostModalOpen: false,
    loadingPost: false,
  }

  componentDidMount() {
    this.props.dispatch(receivePostsAsync())
  }

  render() {
    return (
      <div className='container'>

        <div className='nav'>
          <h1 className='header'>Readable</h1>
          <button
            className='shopping-list'
            >
              New Post

          </button>
        </div>

        <div>
          <Route exact path='/' render={() => (
            <Forum
              // onDeleteContact={this.removeContact}
              // contacts={this.state.contacts}
            />
          )}/>
          <Route exact path='/post/new' render={({ history }) => (
            <NewPost
              // onCreateContact={(contact) => {
              //   this.createContact(contact)
              //   history.push('/')
              // }}
            />
          )}/>
          <Route exact path='/category' render={(props) => (
            <Categories {...props}/>
          )}/>
          <Route exact path={`/category/:id`} render={({ history }) => (
            <Post
              // onCreateContact={(contact) => {
              //   this.createContact(contact)
              //   history.push('/')
              // }}
            />
          )}/>
        </div>
      </div>
    )
  }
}
//
// function mapStateToProps ({ forum }) {
//   return {
//     forum
//   }
// }

export default connect(
  // mapStateToProps,
)(App)
