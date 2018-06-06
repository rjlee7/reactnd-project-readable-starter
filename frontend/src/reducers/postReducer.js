import {
  RECEIVE_POSTS,
  RECEIVE_POST,
  ADD_POST,
  DELETE_POST,
  UPDATE_POST,
  SORT_POSTS_BY_NAME,
  SORT_POSTS_BY_DATE,
  SORT_POSTS_BY_VOTE,
  VOTE_POST
} from '../actions/Types'

const initialState = {
  posts: [],
  post: null
}

function postReducer (state = initialState, action) {
  const { posts, post } = action

  switch (action.type) {
    case RECEIVE_POSTS :
      return {
        ...state,
        posts
      }
    case RECEIVE_POST :
      return {
        ...state,
        post
      }
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
    case SORT_POSTS_BY_NAME :
      return {
        ...state,
        posts: state.posts.slice().sort((a, b) => {
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
        posts: state.posts.slice().sort((a, b) => a.timestamp - b.timestamp)
    }
    case SORT_POSTS_BY_VOTE :
    return {
      ...state,
      posts: state.posts.slice().sort((a, b) => b.voteScore - a.voteScore)
    }
    default :
      return state
  }
}

export default postReducer
