import React, { useEffect, useState } from 'react'
import {API_KEY} from '../../Constants/constants'
import axios from '../../axios'
import "./Banner.css"
const Banner = () => {
  const [movie, setMovie] = useState([])
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((responce)=>{
      console.log(responce.data.results[0])
      setMovie(responce.data.results[0])
    })
  },[])
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
