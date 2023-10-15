import { Link } from 'react-router-dom'
import React from 'react'
import './Header.css'

function Header() {
  return (
    <header>
      <nav className='navbar'>
        <div>
      <img className='logoHeader' src="/images/logo-kasa-rose.png" alt="logo Kasa" />
        </div>
        <div className='nav'>
        <Link to="/">Accueil</Link>
        <Link to="/apropos">A propos</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
