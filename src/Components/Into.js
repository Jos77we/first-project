import React from 'react'
import './Intro.css'
import Topbar from './Topbar'

const Into = () => {
  return (
    <div className='view'>
        <div>
        <Topbar/>
        </div>
        <div className='box'>
            <p style={{fontSize:'2.3rem'}}>Hello</p>
        </div>
    </div>
  )
}

export default Into