import React from 'react'
import './LogementInfo.scss'

function LogementInfo() {
  return (
    <div className='logementInfo'>
      <div className='logementTitreLocation'>
        <div className="logementTitle">titre</div>
        <div className="location">location</div>
      </div>
      <div className="tags">
        <div className='tag'>tag1</div>
        <div className='tag'>tag2</div>
        <div className='tag'>tag3</div>
      </div>
    </div>
  )
}

export default LogementInfo