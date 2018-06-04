import { combineReducers } from 'redux'

import {
  RECEIVE_POSTS,
  RECEIVE_CATEGORIES,
  RECEIVE_COMMENTS,
  RECEIVE_POST,
  // RECEIVE_POST_FAIL,
  ADD_POST,
  DELETE_POST,
  UPDATE_POST,
  SORT_POSTS_BY_NAME,
  SORT_POSTS_BY_DATE,
  SORT_POSTS_BY_VOTE,
  ADD_COMMENT,
  DELETE_COMMENT,
  UPDATE_COMMENT,
  VOTE_POST,
  VOTE_COMMENT,
  // RESET_ERROR_MESSAGE
} from '../actions'

const initialForumState = {
  posts: [],
  categories: [],
  comments: [],
  post: null,
  comment: null,
  // error: null
}

// Updates error message to notify about the failed fetches.
// function errorMessage(state = null, action) {
//   const { type, error } = action
//
//   if (type === RESET_ERROR_MESSAGE) {
//     return null
//   } else if (error) {
//     return action.error
//   }
//
//   return state
// }

function forum (state = initialForumState, action) {
  const { posts, categories, comments, post, comment } = action

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
    case RECEIVE_POST :
      return {
        ...state,
        post
      }
    // case RECEIVE_POST_FAIL :
    //   return {
    //     ...state,
    //     error
    //   }
    case ADD_POST :
      return {
        ...state,
        posts: state.posts.concat([{...post}])
      }
    case UPDATE_POST :
      return {
        ...state,
        posts: state.posts.map(currentPost => {
          return (currentPost.id === post.id) ? post : currentPost
        }),
        post
      }
    case VOTE_POST :
      return {
        ...state,
        posts: state.posts.map(currentPost => {
          return (currentPost.id === post.id) ? post : currentPost
        })
      }
    case DELETE_POST :
      return {
        ...state,
        posts: state.posts.filter(currentPost=>{
          return currentPost.id !== post.id
        })
      }
    case ADD_COMMENT :
      return {
        ...state,
        comments: state.comments.concat([{...comment}])
      }
    case UPDATE_COMMENT :
      return {
        ...state,
        comments: state.comments.map(currentComment => {
          return (currentComment.id === comment.id) ? comment : currentComment
        })
      }
    case VOTE_COMMENT :
      return {
        ...state,
        comments: state.comments.map(currentComment => {
          return (currentComment.id === comment.id) ? comment : currentComment
        })
      }
    case DELETE_COMMENT :
      return {
        ...state,
        comments: state.comments.filter(currentComment=>{
          return currentComment.id !== comment.id
        })
      }
    case SORT_POSTS_BY_NAME :
      return {
        ...state,
        posts: state.posts.sort((a, b) => {
          const nameA = a.author.toLowerCase()
          const nameB = b.author.toLowerCase()
          if(nameA > nameB) return 1
          if(nameA < nameB) return -1
          if(nameA === nameB) return 0
          else return 0
        })
    }
    case SORT_POSTS_BY_DATE :
      return {
        ...state,
        posts: state.posts.sort((a, b) => a.timestamp - b.timestamp)
    }
    case SORT_POSTS_BY_VOTE :
    return {
      ...state,
      posts: state.posts.sort((a, b) => b.voteScore - a.voteScore)
    }
    default :
      return state
  }
}

export default combineReducers({
  forum,
  // errorMessage
})
