import { combineReducers } from 'redux'
import categoryReducer from './categoryReducer'
import commentReducer from './commentReducer'
import postReducer from './postReducer'
import formReducer from './formReducer'
import errorReducer from './errorReducer'

export default combineReducers({
  categoryReducer,
  postReducer,
  commentReducer,
  formReducer,
  errorReducer
})
