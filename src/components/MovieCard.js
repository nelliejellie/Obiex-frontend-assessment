import React from 'react'

function MovieCard({movie}) {
  return (
    <div>
        <div className='w-[199px] h-[266px] bg-[#CEE8EF] rounded-sm'>
            <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}/>
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