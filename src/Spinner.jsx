import React from 'react'
import './Spinner.css'
import Loader from './Loader.gif'

function Spinner() {
  return (
    <div className='main'>

   <img src={Loader} alt=" loading Gif" />

    </div>
  )
}

export default Spinner
