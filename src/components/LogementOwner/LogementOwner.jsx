import React from 'react'
import './LogementOwner.scss'


function LogementOwner(props) {
  return (
    <div className="logementOwner">
      <div className="Owner">
        <div className="nameOwner">{props.name}</div>
        <div className="pictureOwner">
          <img src={props.picture} alt={props.name} />
        </div>
      </div>
      <div className="ratingOwner">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
      </div>
    </div>
  )
}

export default LogementOwner