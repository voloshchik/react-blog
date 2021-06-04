import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { NavLink } from 'react-router-dom'

const Post = () => {
  const [post, setPost] = useState(null)

  let { id } = useParams()
  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      setPost(res.data)
    }

    fetchPost()
  }, [id])

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
