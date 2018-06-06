import {
  RESET_ERROR_MESSAGE
} from '../actions/Types'

const initialState = {
  error: ''
}

function errorReducer(state = initialState, action) {
  const { type, error } = action
  if (type === RESET_ERROR_MESSAGE) {
    return {
      error: ''
    }
  } else if (error) {
    return { error }
  }
  return state
}

export default errorReducer
