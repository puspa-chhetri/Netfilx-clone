import React, { useEffect, useState } from 'react'
import './Player.css'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  const {id} = useParams();

  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof:""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    Authorization:  'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNjhjZTcxMzA0MjJlNzNmYzRkZWEyZjU5MzliYTE3NyIsIm5iZiI6MTczMzg0MTA3Mi4yMjEsInN1YiI6IjY3NTg1MGIwOTkzNTliMDQ2OGE0NjBjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Sk7_cpYFprzEozmbzrDrVjK5mrUHsi2p-RGJeU9vfEQ' 
    }
  };

  useEffect(() => {
    fetch(`https://api.********/*/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
  }, [])



  return (
    <div className='player'>
      <svg onClick={() => {navigate(-1)}} height="2.4rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#e9ecf1" d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM215 127c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-71 71L392 232c13.3 0 24 10.7 24 24s-10.7 24-24 24l-214.1 0 71 71c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L103 273c-9.4-9.4-9.4-24.6 0-33.9L215 127z"/></svg>
      <iframe width='90%' height='90%'
       src={`https://www.youtube.com/embed/${apiData.key}`} 
       title='trailer' frameBorder="0" allowFullScreen></iframe>
       <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
       </div>
    </div>
  )
}

export default Player
