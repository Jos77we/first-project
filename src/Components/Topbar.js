import React from 'react'
import './Topbar.css'
import webfont from 'webfontloader'

function Topbar() {

    webfont.load({
        google: {
            families: ['Quicksand']
        }
    })
  return (
    <>
    <div className='layout'>
    <div className='logo'>
        <p style={{marginLeft:'10px'}}>logo</p>
    </div>
    <div className='elements'>
        <div style={{padding:'0px 10px'}}>
            <p>Home</p>
        </div>
        <div style={{padding:'0px 10px'}}>
            <p>Product</p>
        </div>
        <div style={{padding:'0px 10px'}}>
            <p>Order</p>
        </div>
        <div style={{padding:'0px 10px'}}>
            <p>Sign-in</p>
        </div>
        </div>
    </div>
    </>
  )
}

export default Topbar