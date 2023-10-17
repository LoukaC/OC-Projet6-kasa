import React from 'react'
import './LogementOwner.scss'


function LogementOwner() {
  return (
    <div className="logementOwner">
      <div className="Owner">
        <div className="nameOwner">nom</div>
        <div className="pictureOwner">
          picture
          <img src="" alt="" />
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