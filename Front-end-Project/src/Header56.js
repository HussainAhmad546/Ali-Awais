import React from 'react'
import './myStyle.css'
import arr from './Data'
import mapping from './mapping'

function Header56() {
  return (
<div className="head-5-main">
    <div className="head-5-intro" >
        <h1 >Industries</h1>
    </div>
    <div className='header56' style={{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly', height:'1000px',overflow:'scrollBy'}}>
      {arr.map(mapping)}
    </div>       
</div>
  )
}
export default Header56
