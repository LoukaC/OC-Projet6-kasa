import React from 'react'
import './Appartment.scss'
import { Link } from 'react-router-dom'

function Appartment({title}) {

  return (
    <Link to="/logement">
    <div className="appartment">
      <h2>{title}</h2>
    </div>
    </Link>
  )
}

export default Appartment
