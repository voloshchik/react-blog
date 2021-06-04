import React from 'react'
import { NavLink } from 'react-router-dom'

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
          <NavLink key={post.id} to={`/post/${post.id}`}>
            <li className='list-group-item '>{post.title}</li>
          </NavLink>
        ))}
      </ul>
    </>
  )
}

export default Posts
