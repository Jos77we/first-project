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
            <div className='section-1'></div>
            <div className='section-2'></div>
        </div>
    </div>
  )
}

export default Into