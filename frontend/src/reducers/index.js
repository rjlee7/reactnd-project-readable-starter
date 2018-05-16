import { combineReducers } from 'redux'

import {
  RECEIVE_POSTS,
  RECEIVE_CATEGORIES,
  RECEIVE_COMMENTS,
  UPDATE_POST
} from '../actions'

const initialForumState = {
  posts: [],
  categories: [],
  comments: []
}

function forum (state = initialForumState, action) {
  const { posts, categories, comments, post } = action

  switch (action.type) {
    case RECEIVE_POSTS :
      return {
        ...state,
        posts
      }
    case RECEIVE_CATEGORIES:
      return {
        ...state,
        categories
      }
    case RECEIVE_COMMENTS:
      return {
        ...state,
        comments
      }
    case UPDATE_POST :
      return {
        ...state,
        post
      }
    default :
      return state
  }
}

export default combineReducers({
  forum
})
