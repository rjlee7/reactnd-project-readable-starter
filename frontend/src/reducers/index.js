import { combineReducers } from 'redux'

import {
  RECEIVE_POSTS,
  RECEIVE_CATEGORIES,
  RECEIVE_COMMENTS,
  UPDATE_POST,
  RECEIVE_POST,
  ADD_POST,
  DELETE_POST,
  SORT_POSTS_BY_NAME,
  SORT_POSTS_BY_DATE,
  SORT_POSTS_BY_VOTE
} from '../actions'

const initialForumState = {
  posts: [],
  categories: [],
  comments: [],
  post: null
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
        posts: state.posts.map(currentPost => {
          return (currentPost.id === post.id) ? post : currentPost
        })
      }
    case RECEIVE_POST :
      return {
        ...state,
        post
      }
    case ADD_POST :
      return {
        ...state,
        posts: state.posts.concat([...post])
      }
    case DELETE_POST :
      return {
        ...state,
        posts: state.posts.filter(currentPost=>{
          return currentPost.id !== post.id
        })
      }
    case SORT_POSTS_BY_NAME :
      return {
        ...state,
        posts: state.posts.sort((a, b) => {
          let nameA = a.author.toLowerCase(),
            nameB = b.author.toLowerCase()
          if (nameA < nameB)
            return -1
          if (nameA > nameB)
            return 1
          return 0
      })
    }
    case SORT_POSTS_BY_DATE :
      return {
        ...state,
        posts: state.posts.sort((a, b) => {
          let timestampA = a.timestamp,
            timestampB = b.timestamp
          if (timestampA < timestampB)
            return -1
          if (timestampA > timestampB)
            return 1
          return 0
      })
    }
    case SORT_POSTS_BY_VOTE :
    return {
      ...state,
      posts: state.posts.sort((a, b) => {
        let voteA = a.voteScore,
          voteB = b.voteScore
        if (voteA < voteB)
          return -1
        if (voteA > voteB)
          return 1
        return 0
      })
    }
    default :
      return state
  }
}

export default combineReducers({
  forum
})
