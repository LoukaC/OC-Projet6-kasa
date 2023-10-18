import React from 'react'
import './Carrousel.scss'

function Carrousel(props) {
  return (
    <div className="carrousel">
      <img src={props.pictures} alt={props.title} />
      <div className="chevron">
        <i class="fa-solid fa-chevron-left fa-5x"></i>
        <i class="fa-solid fa-chevron-right fa-5x"></i>
      </div>
      <div className="count">1/4</div>
    </div>
  )
}

export default Carrousel
