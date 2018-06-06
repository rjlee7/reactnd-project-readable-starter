import * as APIUtil from '../utils/api'
import * as actionTypes from './Types'

export const resetErrorMessage = () => ({
    type: actionTypes.RESET_ERROR_MESSAGE
})

export function receivePostsForm (postsForm = {}, posts = []) {
  return {
    type: actionTypes.RECEIVE_POSTS_FORM,
    postsForm,
    posts
  }
}

export function startEditingPostsForm (postsForm = {}, post = {}) {
  return {
    type: actionTypes.START_EDITING_POSTS_FORM,
    postsForm,
    post
  }
}

export function onEditingPostsForm (postsForm = {}, post = {}, name = '', value = '') {
  return {
    type: actionTypes.ON_EDITING_POSTS_FORM,
    postsForm,
    post,
    name,
    value
  }
}

export function onKeypressPostsForm (postsForm = {}, post = {}) {
  return {
    type: actionTypes.ON_KEYPRESS_POSTS_FORM,
    postsForm,
    post
  }
}

export function onBlurPostsForm (postsForm = {}, post = {}) {
  return {
    type: actionTypes.ON_BLUR_POSTS_FORM,
    postsForm,
    post
  }
}

export function sortPostsByName (posts = []) {
  return {
    type: actionTypes.SORT_POSTS_BY_NAME,
    posts
  }
}

export function sortPostsByDate (posts = []) {
  return {
    type: actionTypes.SORT_POSTS_BY_DATE,
    posts
  }
}

export function sortPostsByVote (posts = []) {
  return {
    type: actionTypes.SORT_POSTS_BY_VOTE,
    posts
  }
}


export function receiveCategories (categories = []) {
  return {
    type: actionTypes.RECEIVE_CATEGORIES,
    categories
  }
}

export const receiveCategoriesAsync = () => dispatch => (
  APIUtil
    .getCategories()
    .then(categories => dispatch(receiveCategories(categories.categories)))
)

export function receivePost (post) {
  return {
    type: actionTypes.RECEIVE_POST,
    post
  }
}

export function receivePostFail (error) {
  return {
    type: actionTypes.RECEIVE_POST_FAIL,
    error
  }
}

export const receivePostAsync = (post_id) => dispatch => (
  APIUtil
    .getPost(post_id)
    .then(post => {
      Object.keys(post).length ? dispatch(receivePost(post)) : dispatch(receivePostFail('Post does not exist.'))
    })
    .catch(error => {
      return dispatch(receivePostFail(error))
    })
)

export const receivePostForCategoryAsync = (category, post_id) => dispatch => (
  APIUtil
    .getPostForCategory(category, post_id)
    .then(post => dispatch(receivePost(post)))
)

export function receivePostsForCategory (posts = []) {
  return {
    type: actionTypes.RECEIVE_POSTS,
    posts
  }
}

export const receivePostsForCategoryAsync = (category) => dispatch => (
  APIUtil
    .getPostsForCategory(category)
    .then(posts => dispatch(receivePostsForCategory(posts)))
)

export function receivePosts (posts = []) {
  return {
    type: actionTypes.RECEIVE_POSTS,
    posts
  }
}

export const receivePostsAsync = () => dispatch => (
  APIUtil
    .getPosts()
    .then(posts => dispatch(receivePosts(posts)))
)

export function addPost (post) {
  return {
    type: actionTypes.ADD_POST,
    post
  }
}

export const addPostAsync = (timestamp, title, body, author, category, id) => dispatch => (
  APIUtil
    .addPost(timestamp, title, body, author, category, id)
    .then(post => dispatch(addPost(post)))
)

export function updatePost (post) {
  return {
    type: actionTypes.UPDATE_POST,
    post
  }
}

export const updatePostAsync = (id, title, body) => dispatch => (
  APIUtil
    .updatePost(id, title, body)
    .then(post => dispatch(updatePost(post)))
)

export function votePost (post) {
  return {
    type: actionTypes.VOTE_POST,
    post
  }
}

export const votePostAsync = (id, vote) => dispatch => (
  APIUtil
    .votePost(id, vote)
    .then(post => dispatch(votePost(post)))
)

export function deletePost (post) {
  return {
    type: actionTypes.DELETE_POST,
    post
  }
}

export const deletePostAsync = (id) => dispatch => (
  APIUtil
    .deletePost(id)
    .then(post => dispatch(deletePost(post)))
)

export function receiveComments (comments = []) {
  return {
    type: actionTypes.RECEIVE_COMMENTS,
    comments
  }
}

export const receiveCommentsAsync = (post_id) => dispatch => (
  APIUtil
    .getCommentsForPost(post_id)
    .then(comments => {
      dispatch(receiveComments(comments))
    })
)

export function addComment (comment) {
  return {
    type: actionTypes.ADD_COMMENT,
    comment
  }
}

export const addCommentAsync = (id, timestamp, body, author, parentId) => dispatch => (
  APIUtil
    .addComment(id, timestamp, body, author, parentId)
    .then(comment => dispatch(addComment(comment)))
)

export function voteComment (comment) {
  return {
    type: actionTypes.VOTE_COMMENT,
    comment
  }
}

export const voteCommentAsync = (id, vote) => dispatch => (
  APIUtil
    .voteComment(id, vote)
    .then(comment => dispatch(voteComment(comment)))
)

export function updateComment (comment) {
  return {
    type: actionTypes.UPDATE_COMMENT,
    comment
  }
}

export const updateCommentAsync = (id, timestamp, body) => dispatch => (
  APIUtil
    .updateComment(id, timestamp, body)
    .then(comment => dispatch(updateComment(comment)))
)

export function deleteComment (comment) {
  return {
    type: actionTypes.DELETE_COMMENT,
    comment
  }
}

export const deleteCommentAsync = (id) => dispatch => (
  APIUtil
    .deleteComment(id)
    .then(comment => dispatch(deleteComment(comment)))
)
