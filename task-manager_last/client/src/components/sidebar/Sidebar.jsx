import React from 'react'
import './sidebar.scss'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

const Sidebar = () => {

  const {auth} = useSelector((state) => ({...state}))
  const {currentUser} = auth;
  
  return (
    <div>
        <ul className = 'sidebar'>
          <li className='list-item'><h3>{currentUser.username}</h3></li>
          <li>
            <Link to='/dashboard'>Dashboard</Link>
          </li>
        </ul>
    </div>
  )
}

export default Sidebar
