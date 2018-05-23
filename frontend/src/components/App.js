import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Main from '../containers/Main'
import Categories from '../containers/Categories'
import Category from '../containers/Category'
import Post from '../containers/Post'
import NewPostView from './NewPostView'
import Modal from 'react-modal'

class App extends Component {
  state = {
    newPostModalOpen: false
  }

  openNewPostModal = () => {
    this.setState(() => ({
      newPostModalOpen: true
    }))
  }
  closeNewPostModal = () => {
    this.setState(() => ({
      newPostModalOpen: false
    }))
  }
  render() {
    const { newPostModalOpen } = this.state
    return (
      <div className='container'>

        <div className='nav'>
          <h1 className='header'><Link to={`/`}>Readable</Link></h1>
          <button
            className='shopping-list'
            onClick={this.openNewPostModal}
            >
              New Post
          </button>
        </div>

        <div>
          <Route exact path='/' render={(props) => (
            <div>
              <Categories {...props}/>
              <Main {...props}/>
            </div>
          )}/>
          <Route exact path={`/:category`} render={(props) => (
            <div>
              <Categories {...props}/>
              <Category {...props}/>
            </div>
          )}/>
          <Route exact path={`/:category/:post_id`} render={(props) => (
            <div>
              <Categories {...props}/>
              <Post {...props}/>
            </div>
          )}/>
        </div>

        <Modal
          className='modal'
          overlayClassName='overlay'
          isOpen={newPostModalOpen}
          onRequestClose={this.closeNewPostModal}
          contentLabel='Modal'
          ariaHideApp={false}
        >
          {newPostModalOpen && <NewPostView/>}
        </Modal>

      </div>
    )
  }
}

export default App
