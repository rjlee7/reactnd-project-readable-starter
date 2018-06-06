import {
  RECEIVE_COMMENTS,
  ADD_COMMENT,
  DELETE_COMMENT,
  UPDATE_COMMENT,
  VOTE_COMMENT,
} from '../actions/Types'

const initialState = {
  comments: []
}

function commentReducer (state = initialState, action) {
  const { comments, comment } = action

  switch (action.type) {
    case RECEIVE_COMMENTS:
      return {
        ...state,
        comments
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
    default :
      return state
  }
}

export default commentReducer
