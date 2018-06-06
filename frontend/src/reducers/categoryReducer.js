import {
  RECEIVE_CATEGORIES,
} from '../actions/Types'

const initialState = {
  categories: [],
}

function categoryReducer (state = initialState, action) {
  const { categories } = action

  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return {
        ...state,
        categories
      }
    default :
      return state
  }
}

export default categoryReducer
