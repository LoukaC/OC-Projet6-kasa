import { NavLink } from 'react-router-dom'
import React from 'react'
import './Error.scss'

function Error() {
  return (
    <div className='errorBox'>
      <div className='error404'>404</div>
      <h1>Oups! la page que vous demandez n'existe pas.</h1>
      <div className="errorNav">
        <NavLink to="/">Retourner sur la page d'accueil</NavLink>
      </div>
    </div>
  )
}

export default Error
