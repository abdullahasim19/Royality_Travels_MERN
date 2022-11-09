import React from 'react'
import { NavLink } from 'react-router-dom'

import './NavLinks.css';

export default function NavLinks(props) {

  return (
    <ul className='nav-links'>
        <li>
            <NavLink to='/trip'>Trips</NavLink>
        </li>
        <li>
            <NavLink to='/booking'>Booking</NavLink>
        </li>
        <li>
            <NavLink to='/auth'>Login</NavLink>
        </li>

    </ul>
  )
}
