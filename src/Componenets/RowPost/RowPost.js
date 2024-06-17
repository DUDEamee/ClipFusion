import React,{useEffect, useState} from 'react'
import { imageUrl} from '../../constants/constants'
import "./RowPost.css"
import Youtube from 'react-youtube'
import axios from '../../axios'

const RowPost = (props) => {
  const[movies,setMovies] = useState([])
  const [urlId,setId] = useState('')
  useEffect(()=>{
    axios.get(props.urls).then(response=>{
      console.log(response.data)
      setMovies(response.data.results)
    }).catch(err=>{
      // alert('Network Error')
    })
  }, [])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie = (id)=>{
    console.log(id)
    axios.get('movie/573435/videos?api_key=4be4ab59f8118b0cf8dd75efe8381b78&language=en-US').then(response=>{
      console.log(response.data)
    })
  }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj)=>

        <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallposter':'poster'} alt="poster" src={`${imageUrl+obj.backdrop_path}`}/>         

        )}

      </div>
        <Youtube opts={opts} videoId="2g811Eo7K8U" />
    </div>
  )
}

export default RowPost
