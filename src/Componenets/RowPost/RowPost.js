import React,{useEffect, useState} from 'react'
import { imageUrl} from '../../Constants/constants'
import "./RowPost.css"
import axios from '../../axios'

const RowPost = (props) => {
  const[movies,setMovies] = useState([])
  useEffect(()=>{
    axios.get(props.urls).then(response=>{
      console.log(response.data)
      setMovies(response.data.results)
    }).catch(err=>{
      // alert('Network Error')
    })
  }, [])
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj)=>

        <img className={props.isSmall ? 'smallposter':'poster'} alt="poster" src={`${imageUrl+obj.backdrop_path}`}/>         

        )}

      </div>

    </div>
  )
}

export default RowPost
