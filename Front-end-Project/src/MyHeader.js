import React from 'react'
import pic from './images/AppsGenii-Technologies.png'
import './myStyle.css'


function Myheader() {
  return (
    <div className="head-2" style={{display: 'flex'}}>
        <div className="head-2-img" style={{width: '25%', TextAlign: 'center'}}>
            <img src={pic} alt="" height="60px"/>
        </div>
        <div className="head-2-nav" style={{width: '73%'}}>
            <nav>
                <ul>
                    <li style={{MarginLeft: '100px'}}>Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Portfolio</li>
                    <li>Case Study</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                </ul>
            </nav>
        </div>
    </div>
   
  )
}

export default Myheader
