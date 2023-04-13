import React from 'react'
import { useNavigate } from 'react-router-dom';

function MovieCard({movie}) {
    const navigate = useNavigate();
    const handleNavigation = (id) =>{
        navigate(`/details/${id}`);
    }
  return (
    <div onClick={() =>handleNavigation(movie.id)}>
        <div className='w-[199px] md:w-[150px] h-[266px] bg-[#CEE8EF] rounded-sm'>
            <img className='h-[100%]' src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}/>
        </div>
        <div className='space-y-4 text-white'>
            <p>{movie.title}</p>
            <small>{movie.release_date.slice(0,4)} | </small>
            <small>1h53m</small>
        </div>
    </div>
  )
}

export default MovieCard