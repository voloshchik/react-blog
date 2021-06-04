import React from 'react'
import { NavLink } from 'react-router-dom'

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
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
