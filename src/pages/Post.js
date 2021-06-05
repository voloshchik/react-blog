import React, { useContext } from 'react'
import { useParams } from 'react-router'
import { NavLink } from 'react-router-dom'

import { PostContext } from '../context/post/postContext'

const Post = () => {
  const { posts } = useContext(PostContext)

  let { id } = useParams()
  const post = posts.find((post) => post.id == id)

  if (!post) {
    return <p>loading....</p>
  }
  return (
    <div className='card'>
      <div className='card-body'>
        <h5 className='card-title'>{post.title}</h5>

        <p className='card-text'>{post.body}</p>
        <NavLink to='/' className='card-link'>
          Back Posts
        </NavLink>
      </div>
    </div>
  )
}

export default Post
