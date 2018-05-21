import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Main from './Main'
import Categories from './Categories'
import Category from './Category'
import Post from './Post'
import NewPost from './NewPost'
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
          <Route path='/category' render={(props) => (
            <Categories {...props}/>
          )}/>
          <Route path={`/category/:id`} render={(props) => (
            <div>
              <Categories {...props}/>
              <Category {...props}/>
            </div>
          )}/>
          <Route path={`/post/:id`} render={(props) => (
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
          {newPostModalOpen && <NewPost/>}
        </Modal>

      </div>
    )
  }
}

export default App
