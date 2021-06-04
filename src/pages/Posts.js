import React from 'react'

import Spinner from '../components/Spinner'

const Posts = ({ posts = [], loading }) => {
  if (loading) {
    return <Spinner />
  }
  return (
    <>
      <h1>Posts</h1>
      <ul className='list-group mb-4'>
        {posts.map((post) => (
          <li key={post.id} className='list-group-item '>
            {post.title}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Posts
