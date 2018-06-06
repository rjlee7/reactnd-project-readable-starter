import { combineReducers } from 'redux'
import categoryReducer from './categoryReducer'
import commentReducer from './commentReducer'
import postReducer from './postReducer'
import errorReducer from './errorReducer'

export default combineReducers({
  categoryReducer,
  postReducer,
  commentReducer,
  errorReducer
})
