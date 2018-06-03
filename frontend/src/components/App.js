import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Main from '../containers/Main'
import Category from '../containers/Category'
import Post from '../containers/Post'
import NewPostView from './NewPostView'
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
