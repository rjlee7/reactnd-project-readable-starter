
const api = "http://localhost:3001"

const headers = {
  'Accept': 'application/json',
  'Authorization': 'Basic rachel'
}

export const getPostsForCategory = (category) =>
  fetch(`${api}/${category}/posts`, { headers })
  .then(res => {
    console.log('res getPostsForCategory',res)
    if(res.status === 200) return res.json()
    else throw new Error(res.statusText)
  })

export const getPostForCategory = (category, post_id) =>
  fetch(`${api}/${category}/${post_id}`, { headers })
  .then(res => {
    if(res.status === 200) return res.json()
    else throw new Error(res.statusText)
  })

export const getCategories = () =>
  fetch(`${api}/categories`, { headers })
  .then(res => {
    if(res.status === 200) return res.json()
    else throw new Error(res.statusText)
  })

export const getPosts = () =>
  fetch(`${api}/posts`, { headers })
  .then(res => {
    if(res.status === 200) return res.json()
    else throw new Error(res.statusText)
  })

export const getPost = (id) =>
  fetch(`${api}/posts/${id}`, { headers })
  .then(res => {
    if(res.status === 200) return res.json()
    else throw new Error(res.statusText)
  })

export const updatePost = (id, title, body) =>
  fetch(`${api}/posts/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, body })
  })
  .then(res => {
    if(res.status === 200) return res.json()
    else throw new Error(res.statusText)
  })

export const votePost = (id, vote) =>
  fetch(`${api}/posts/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ option: vote })
  })
  .then(res => {
    if(res.status === 200) return res.json()
    else throw new Error(res.statusText)
  })

export const deletePost = (id) =>
  fetch(`${api}/posts/${id}`, {
    method: 'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
  })
  .then(res => {
    if(res.status === 200) return res.json()
    else throw new Error(res.statusText)
  })

export const addPost = (timestamp, title, body, author, category, id) =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ timestamp, title, body, author, category, id })
  })
  .then(res => {
    if(res.status === 200) return res.json()
    else throw new Error(res.statusText)
  })

export const getCommentsForPost = (post_id) =>
  fetch(`${api}/posts/${post_id}/comments`, { headers })
  .then(res => {
    if(res.status === 200) return res.json()
    else throw new Error(res.statusText)
  })

export const addComment = (id, timestamp, body, author, parentId) =>
  fetch(`${api}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id, timestamp, body, author, parentId })
  })
  .then(res => {
    if(res.status === 200) return res.json()
    else throw new Error(res.statusText)
  })

export const getComment = (id) =>
  fetch(`${api}/comments/${id}`, { headers })
  .then(res => {
    if(res.status === 200) return res.json()
    else throw new Error(res.statusText)
  })

export const voteComment = (id, vote) =>
  fetch(`${api}/comments/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ option: vote })
  })
  .then(res => {
    if(res.status === 200) return res.json()
    else throw new Error(res.statusText)
  })

export const updateComment = (id, timestamp, body) =>
  fetch(`${api}/comments/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ timestamp, body })
  })
  .then(res => {
    if(res.status === 200) return res.json()
    else throw new Error(res.statusText)
  })


export const deleteComment = (id) =>
  fetch(`${api}/comments/${id}`, {
    method: 'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
  })
  .then(res => {
    if(res.status === 200) return res.json()
    else throw new Error(res.statusText)
  })
