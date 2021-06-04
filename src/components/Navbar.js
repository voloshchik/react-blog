import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar navbar-dark bg-primary navbar-expand-lg'>
      <div className='navbar-brand'>React Blog</div>
      <ul className='navbar-nav'>
        <li className='nav-item'>
          <NavLink to='/' exact className='nav-link'>
            Posts
          </NavLink>
        </li>

        <li className='nav-item'>
          <NavLink to='/create' className='nav-link'>
            Create
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
