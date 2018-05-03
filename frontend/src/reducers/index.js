import { combineReducers } from 'redux'

import {
  RECEIVE_POSTS,
  RECEIVE_CATEGORIES
} from '../actions'

const initialForumState = {
  posts: [],
  categories: []
}

function forum (state = initialForumState, action) {
  const { posts, categories } = action

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
    default :
      return state
  }
}

export default combineReducers({
  forum
})
