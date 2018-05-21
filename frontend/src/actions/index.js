import * as APIUtil from '../utils/api'

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const RECEIVE_POST = 'RECEIVE_POST'
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const ADD_POST = 'ADD_POST'
export const ADD_COMMENT = 'ADD_COMMENT'
export const UPDATE_POST = 'UPDATE_POST'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const VOTE_COMMENT = 'VOTE_COMMENT'
export const DELETE_POST = 'DELETE_POST'
export const DELETE_COMMENT = 'DELETE_COMMENT'

export function receiveCategories (categories = []) {
  return {
    type: RECEIVE_CATEGORIES,
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
    type: RECEIVE_POST,
    post
  }
}
export const receivePostAsync = (post_id) => dispatch => (
  APIUtil
    .getPost(post_id)
    .then(post => {
      dispatch(receivePost(post))
    })
)

export const receivePostForCategoryAsync = (category, post_id) => dispatch => (
  APIUtil
    .getPostForCategory(category, post_id)
    .then(post => dispatch(receivePost(post)))
)

export function receivePostsForCategory (posts = []) {
  return {
    type: RECEIVE_POSTS,
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
    type: RECEIVE_POSTS,
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
    type: ADD_POST,
    post
  }
}

export const addPostAsync = (id, timestamp, title, body, author, category) => dispatch => (
  APIUtil
    .addPost(id, timestamp, title, body, author, category)
    .then(post => dispatch(addPost(post)))
)

export function updatePost (post) {
  return {
    type: UPDATE_POST,
    post
  }
}

export const updatePostAsync = (id, title, body) => dispatch => (
  APIUtil
    .updatePost(id, title, body)
    .then(post => dispatch(updatePost(post)))
)

export function deletePost (post) {
  return {
    type: DELETE_POST,
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
    type: RECEIVE_COMMENTS,
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
    type: ADD_COMMENT,
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
    type: VOTE_COMMENT,
    comment
  }
}

export const voteCommentAsync = (id, upVote, downVote) => dispatch => (
  APIUtil
    .voteComment(id, upVote, downVote)
    .then(comment => dispatch(voteComment(comment)))
)

export function updateComment (comment) {
  return {
    type: UPDATE_COMMENT,
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
    type: DELETE_COMMENT,
    comment
  }
}

export const deleteCommentAsync = (id) => dispatch => (
  APIUtil
    .deleteComment(id)
    .then(comment => dispatch(deleteComment(comment)))
)
