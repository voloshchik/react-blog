import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar navbar-dark bg-primary navbar-expand-lg'>
      <div className='navbar-brand'>React Blog</div>
      <ul className='navbar-nav'>
        <li className='nav-item'>
          <a href='#' className='nav-link'>
            Home
          </a>
        </li>
        <li className='nav-item'>
          <a href='#' className='nav-link'>
            Posts
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
