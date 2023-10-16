import React from 'react'
import './Appartment.scss'
import { Link } from 'react-router-dom'

function Appartment(props) {

  return (
    <Link to="/logement">
      <div className="appartment">
        <img src={props.image} alt={props.title} />
        <h3>{props.title}</h3>
      </div>
    </Link>
  )
}

export default Appartment
