import React, { Component } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import Main from '../containers/Main'
import Category from '../containers/Category'
import Post from '../containers/Post'
import Comments from '../containers/Comments'
import NewPostView from './NewPostView'
import NewCommentView from './NewCommentView'
import Modal from 'react-modal'
import NotFoundView from './NotFoundView'
import NavbarView from './NavbarView'

class App extends Component {
  state = {
  }

  render() {
    return (
      <div>
        <NavbarView />
        <div className='container'>
          <Switch>
            <Route exact path='/' render={(props) => (
              <Main {...props}/>
            )}/>
            <Route exact path={`/new-post`} render={(props) => (
              <NewPostView />
            )}/>
            <Route exact path={`/:category`} render={(props) => (
              <Category {...props}/>
            )}/>
            <Route exact path={`/:category/:post_id`} render={(props) => (
              <Post {...props}/>
            )}/>
            <Route component={NotFoundView}/>
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
