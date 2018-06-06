import {
  RECEIVE_POSTS_FORM,
  START_EDITING_POSTS_FORM,
  ON_EDITING_POSTS_FORM,
  ON_KEYPRESS_POSTS_FORM,
  ON_BLUR_POSTS_FORM
} from '../actions/Types'

const initialState = {
  postsForm : {},
  posts: [],
  post: {},
  name: '',
  value: ''
}

function postsFormReducer (state = initialState, action) {
  const { postsForm , posts, post, name, value } = action
  let postsFormObj = {...postsForm}

  switch (action.type) {
    case RECEIVE_POSTS_FORM :
      posts.forEach(a => {
        if(!postsFormObj[a.id]) postsFormObj[a.id] = {}
        postsFormObj[a.id].status = 'view'
        postsFormObj[a.id].title = a.title
        postsFormObj[a.id].body = a.body
      })
      return {
        ...state,
        postsForm: postsFormObj
    }
    case START_EDITING_POSTS_FORM :
      postsFormObj[post.id].status = 'edit'
      return {
        ...state,
        postsForm: postsFormObj
    }
    case ON_EDITING_POSTS_FORM :
      postsFormObj[post.id][name] = value
      return {
        ...state,
        postsForm: postsFormObj
    }
    case ON_KEYPRESS_POSTS_FORM :
      postsFormObj[post.id].status = 'view'
      return {
        ...state,
        postsForm: postsFormObj
    }
    case ON_BLUR_POSTS_FORM :
      postsFormObj[post.id].status = 'view'
      return {
        ...state,
        postsForm: postsFormObj
    }
    default :
      return state
  }
}

export default postsFormReducer
