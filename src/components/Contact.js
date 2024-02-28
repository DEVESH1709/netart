import React from 'react'
import './Contact.css'
import{IoMdCall } from 'react-icons/io'
import {FaFacebookF } from 'react-icons/fa'
import{TfiWorld } from 'react-icons/tfi'
const Contact = () => {
  return (
    <div className='contact'>
    <div className='container'>
        <div className='call'>
            <div className='io'><IoMdCall fontSize={25}/></div>
           <div className='con'>Toll free <strong>1800 200 1234</strong></div> 
        </div>
        <div className='face'>
        <div className='io'><FaFacebookF fontSize={25}/></div>
           <div className='con'>www.facebook.com/cripumps</div> 
        </div>
        <div className='web'>
        <div className='ios'><TfiWorld fontSize={25}/></div>
           <div className='we'>www.crigroups.com</div> 

        </div>
        </div>
    </div>
  )
}

export default Contact