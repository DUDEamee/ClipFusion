import React,{useEffect, useState} from 'react'
import { API_KEY, imageUrl} from '../../constants/constants'
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
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      if(response.data.results.length!==0){
        setId(response.data.results[0])
      }else{
        console.log('Trailer is emty')
      }
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
{   urlId &&  <Youtube opts={opts} videoId={urlId.key} /> 
}    </div>
  )
}

export default RowPost