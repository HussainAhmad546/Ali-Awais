import React from 'react'
import pic1 from './images/Banner-6-350x250.jpg'
import pic2 from './images/how-we-work-350x250.jpeg'
import pic3 from './images/thought-leadership-service.jpeg'
import './myStyle.css'

function Header4() {
  return (
    <div className="head-4">
    <div className="head-4-1">
        <img src={pic1} alt="hgfds"/>
    </div>
    <div className="head-4-1">
        <img src={pic2} alt="nbvc"/>
    </div>
    <div className="head-4-1">
        <img src={pic3} alt="tre"/>
    </div>
</div>
  )
}

export default Header4
