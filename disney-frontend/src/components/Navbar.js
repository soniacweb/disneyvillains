import React from 'react'
import { Link } from 'react-router-dom'
import 'bulma'

const Navbar = () => {
  const [navClassName, setNavClassName] = React.useState('navbar-menu')

  const clickBurger = () => {
    if (navClassName === 'navbar-menu') {
      setNavClassName('navbar-menu is-active')
    } else {
      setNavClassName('navbar-menu')
    }
  }

  return (
    <div className="navbar has-background-black">
      <div className="container">
        <div className="navbar-brand">
          <Link className="disneylogo navbar-item has-text-white has-text-weight-bold is-size-5" to="/">
            <img src='https://i.imgur.com/IgqaRZy.png'/></Link>

          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={clickBurger}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>

        </div>
        <div className="navbar-menu is-active">
          <div id="navbarBasicExample" className={navClassName}>

            <div className="navbar-end">
              <div className="navbar-item">
                <Link className='white' to={'/villains'}>Villains</Link>
              </div>
              <div className="navbar-item">
                <Link className='white' to={'/villains/new'}>New Villains</Link>
              </div>
              <div className="navbar-item">
                <Link className='white' to={'/register'}>Register</Link>
              </div>
              <div className="navbar-item">
                <Link className='white'to={'/login'}>Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar