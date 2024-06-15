import React from 'react'
import "./Banner.css"
const Banner = () => {
  return (
    <div className='banner'>
      <div className='content'>
        <h1 className='title'>Movie Name</h1>
        <div className='banner_buttons'>
          <button className='button'>Play</button>
          <button className='button'>My List</button>
        </div>
        <h1 className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h1>
      </div>
      <div className="fadeBottom">

      </div>
    </div>
  )
}

export default Banner
