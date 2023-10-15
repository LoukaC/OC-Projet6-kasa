import React from 'react'
import './Gallery.scss'
import Appartment from '../../components/Appartment/Appartment'

function Gallery() {
  return (
    <div className="gallery">
        <Appartment />
        <Appartment />
        <Appartment />
        <Appartment />
        <Appartment />
        <Appartment />
    </div>
  )
}

export default Gallery