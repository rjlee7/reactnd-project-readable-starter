import React from 'react'

export default function NewPost ({ list }) {
  return (
    <div className='ingredients-list'>
      <h3 className='subheader'>
        New Post
      </h3>
      <ul>
        {list.map((item) => (
          <li key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
