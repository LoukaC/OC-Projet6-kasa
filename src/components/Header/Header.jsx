import { NavLink } from 'react-router-dom'
import React from 'react'
import './Header.scss'

function Header() {
  return (
    <header>
      <nav className="navbar">
        <NavLink to="/">
          <div className="logoHeader">
            <img
              src="/images/logo-kasa-rose.png"
              alt="logo Kasa"
              srcSet="/images/logo-kasa-rose-responsive.png, 600w"
            />
          </div>
        </NavLink>
        <div className="nav">
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/apropos">A propos</NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Header
