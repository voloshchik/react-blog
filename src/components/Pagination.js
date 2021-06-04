import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { PostContext } from '../context/post/postContext'

const Pagination = ({ postsPerPage, paginate, currentPage }) => {
  const { posts } = useContext(PostContext)
  const totalPosts = posts.length
  const pageNumbers = []

  for (let i = 1; i < Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <ul className='pagination'>
      {pageNumbers.map((number) => (
        <li key={number} className={currentPage === number ? 'page-item active' : 'page-item'}>
          <NavLink onClick={() => paginate(number)} className='page-link' to='/'>
            {number}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}

export default Pagination
