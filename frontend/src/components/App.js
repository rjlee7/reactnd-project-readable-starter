import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Main from '../containers/Main'
import Category from '../containers/Category'
import Post from '../containers/Post'
import NewPost from '../containers/NewPost'
import NotFoundView from './NotFoundView'
import Navbar from '../containers/Navbar'

const App = () => (
  <div>
    <Navbar />
    <div className='container'>
      <Switch>
        <Route exact path='/' render={(props) => (
          <Main {...props}/>
        )}/>
        <Route exact path={`/new-post`} render={(props) => (
          <NewPost {...props}/>
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

export default App
