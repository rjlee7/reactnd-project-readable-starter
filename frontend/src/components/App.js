import React, { Component } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import Main from '../containers/Main'
import Categories from '../containers/Categories'
import Category from '../containers/Category'
import Post from '../containers/Post'
import Comments from '../containers/Comments'
import NewPostView from './NewPostView'
import NewCommentView from './NewCommentView'
import Modal from 'react-modal'
import NotFoundView from './NotFoundView'

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
          <Link to={`/new-post`}>
            <button>
                New Post
            </button>
          </Link>
        </div>

        <Switch>
          <Route exact path='/' render={(props) => (
            <div>
              <Categories {...props}/>
              <Main {...props}/>
            </div>
          )}/>
          <Route exact path={`/new-post`} render={(props) => (
            <NewPostView />
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
          <Route exact path={`/:category/:post_id/new-comment`} render={(props) => (
            <NewCommentView />
          )}/>
          <Route exact path={`/:category/:post_id/comments`} render={(props) => (
            <div>
              <Categories {...props}/>
              <Comments {...props}/>
            </div>
          )}/>
          <Route component={NotFoundView}/>
        </Switch>

        {/* <Modal
          className='modal'
          overlayClassName='overlay'
          isOpen={newPostModalOpen}
          onRequestClose={this.closeNewPostModal}
          contentLabel='Modal'
          ariaHideApp={false}
        >
          {newPostModalOpen && <NewPostView/>}
        </Modal> */}

      </div>
    )
  }
}

export default App
