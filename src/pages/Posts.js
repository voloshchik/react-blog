import React, { useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import Spinner from '../components/Spinner'
import { PostContext } from '../context/post/postContext'

const Posts = ({ loading, currentPost }) => {
  if (loading) {
    return <Spinner />
  }

  return (
    <>
      <h1>Posts</h1>
      <ul className='list-group mb-4'>
        {currentPost.map((post) => (
          <NavLink key={post.id} to={`/post/${post.id}`}>
            <li className='list-group-item '>{post.title}</li>
          </NavLink>
        ))}
      </ul>
    </>
  )
}

export default Posts
