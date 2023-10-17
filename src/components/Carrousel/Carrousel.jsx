import React from 'react'
import './Carrousel.scss'

function Carrousel() {
  return (
    <div className="carrousel">
      <img src="https://picsum.photos/1240/500" alt="" />
      <div className="chevron">
        <i class="fa-solid fa-chevron-left fa-5x"></i>
        <i class="fa-solid fa-chevron-right fa-5x"></i>
      </div>
      <div className='count'>
        1/4
      </div>
    </div>
  )
}

export default Carrousel
