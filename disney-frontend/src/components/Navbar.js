import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => (
  <div className="navbar has-background-black">
    <div className="container">
      <div className="navbar-brand">
        <Link className="disneylogo navbar-item has-text-white has-text-weight-bold is-size-5" to="/"><img src='../images/disneylogo.png' ></img></Link>
      </div>
      <div className="navbar-menu is-active">
        <div className="navbar-end">
          <div className="navbar-item">
            <Link className='white' to="/villains">Villains</Link>
          </div>
          <div className="navbar-item">
            <Link className='white' to="/villains/new">New Villains</Link>
          </div>
          <div className="navbar-item">
            <Link className='white' to="/register">Register</Link>
          </div>
          <div className="navbar-item">
            <Link className='white'to="/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Navbar