import {
  RECEIVE_POST_FORM,
  START_EDITING_POST_FORM,
  ON_EDITING_POST_FORM,
  ON_KEYPRESS_POST_FORM,
  ON_BLUR_POST_FORM
} from '../actions/Types'

const initialState = {
  postForm : {},
  post: {},
  name: '',
  value: ''
}

function postFormReducer (state = initialState, action) {
  const { postForm, post, name, value } = action
  let postFormObj = {...postForm}

  switch (action.type) {
    case RECEIVE_POST_FORM :
      if(!postFormObj[post.id]) postFormObj[post.id] = {}
      postFormObj[post.id].status = 'view'
      postFormObj[post.id].title = post.title
      postFormObj[post.id].body = post.body
      return {
        ...state,
        postForm: postFormObj
    }
    case START_EDITING_POST_FORM :
      postFormObj[post.id].status = 'edit'
      return {
        ...state,
        postForm: postFormObj
    }
    case ON_EDITING_POST_FORM :
      postFormObj[post.id][name] = value
      return {
        ...state,
        postForm: postFormObj
    }
    case ON_KEYPRESS_POST_FORM :
      postFormObj[post.id].status = 'view'
      return {
        ...state,
        postForm: postFormObj
    }
    case ON_BLUR_POST_FORM :
      postFormObj[post.id].status = 'view'
      return {
        ...state,
        postForm: postFormObj
    }
    default :
      return state
  }
}

export default postFormReducer
