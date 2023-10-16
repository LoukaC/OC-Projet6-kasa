import React from 'react'
import './Carrousel.scss'

function Carrousel() {
  return (
    <div className="carrousel">
      <img src="https://picsum.photos/1000/500" alt="" />
      <div className='chevron'>
      <i class="fa-solid fa-chevron-left"></i>
      <i class="fa-solid fa-chevron-right"></i>
      </div>
    </div>
  )
}

export default Carrousel
