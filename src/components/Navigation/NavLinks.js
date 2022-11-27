import React from 'react'
import { NavLink } from 'react-router-dom'
import {useSelector,useDispatch}  from 'react-redux';
import Button from '../FormElements/Button'
import {Logout} from '../../redux/actions/loggedout'
import { useNavigate} from 'react-router-dom';

import './NavLinks.css';

export default function NavLinks(props) {
  const navigate=useNavigate()
const logoutHandler=()=>{
  dispatch(Logout())
  navigate('/',{replace:true})
}

  const loginState=useSelector((state=>state))
  const dispatch=useDispatch();
  return (
    <ul className='nav-links'>
        <li>
            <NavLink to='/trip'>Trips</NavLink>
        </li>
        <li>
            <NavLink to='/booking'>Booking</NavLink>
        </li>
        {
          loginState.login===false &&(
            <li>
            <NavLink to='/auth'>Login</NavLink>
        </li>
          )
        }
       
{
  loginState.login===true &&(
        <li>
          <Button onClick={logoutHandler}>LOGOUT</Button>
        </li>
  )
}
        
    </ul>
  )
}
