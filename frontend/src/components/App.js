import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import Main from '../containers/Main'
import Category from '../containers/Category'
import Post from '../containers/Post'
import NewPost from '../containers/NewPost'
import NotFoundView from './NotFoundView'
import Navbar from '../containers/Navbar'
import { resetErrorMessage } from '../actions'
import { connect } from 'react-redux'

class App extends Component {
  handleDismissClick = (e) => {
    e.preventDefault()
    this.props.resetErrorMessage()
  }

  renderErrorMessage() {
    const { error } = this.props.errorReducer
    if (!error) {
      return null
    }
    return (
      <p style={{ backgroundColor: '#e99', padding: 10 }}>
        <b>{error.toString()}</b>
        {' '}
        <button className="btn btn-default" onClick={this.handleDismissClick}>
          Dismiss
        </button>
      </p>
    )
  }

  render() {
    return (
      <div>
        <Navbar />
        {this.renderErrorMessage()}
        <div className='container'>
          <Switch>
            <Route exact path='/' render={(props) => (
              <Main {...props}/>
            )}/>
            <Route exact path='/new-post' render={(props) => (
              <NewPost {...props}/>
            )}/>
            <Route exact path='/notfound' component={NotFoundView}/>
            <Route exact path={`/:category`} render={(props) => (
              <Category {...props}/>
            )}/>
            <Route exact path={`/:category/:post_id`} render={(props) => (
              <Post {...props}/>
            )}/>
          </Switch>
        </div>
      </div>
  )
  }
}


const mapStateToProps = ({ errorReducer }) => ({ errorReducer })

export default withRouter(connect(mapStateToProps, {
  resetErrorMessage
})(App))
