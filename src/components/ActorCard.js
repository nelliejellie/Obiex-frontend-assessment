import React from 'react'

function ActorCard({actor}) {
  return (
    <div>
        <div className='w-[199px] md:w-[150px] h-[266px] bg-[#CEE8EF] rounded-sm'>
            <img className='h-[100%] w-full' src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}/> 
        </div>
        <div className='space-y-4 text-white'>
            <p>{actor.name}</p>
            
            <small>{actor.character}</small>
        </div>
    </div>
  )
}

export default ActorCard