import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

function Nav() {
  return (
    <nav className='navbar navbar-expand-lg nav-color'>
      <Link to="/" className='navbar-brand nav-txt'>FULLSTACK PROJECT</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
     </button>
     <div className="collapse navbar-collapse" id="navbarNav">
      <ul className='navbar-nav ms-auto'>
        <li className='nav-item'>
          <Link to='/' className='nav-link nav-txt'>Home</Link>
        </li>
        <li className='nav-item'>
          <Link to='/view' className='nav-link nav-txt'>View</Link>
        </li>
        <li className='nav-item'>
          <Link to='/add' className='nav-link nav-txt'>Add</Link>
        </li>
      </ul>
     </div>
    
    </nav>
  )
}

export default Nav