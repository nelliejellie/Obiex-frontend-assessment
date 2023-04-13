import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import ActorCard from './ActorCard';

function Cast({cast, showCast}) {
  return (
    <div className='ml-20 md:ml-4 mt-10'>
        {
            showCast &&
            <>
                <div className='w-[80%] flex flex-row items-center justify-between md:hidden'>
                    <h2 className='text-white mb-4'>Cast</h2>
                    <div className='flex flex-row space-x-4'>
                        <AiOutlineArrowLeft className='text-blue-400 text-sm border border-blue-400 rounded-full'/>
                        <AiOutlineArrowRight className='text-blue-400 text-sm border border-blue-400 rounded-full'/>
                    </div>
                </div>
                <div className='flex flex-row space-x-2 overflow-auto md:grid md:grid-cols-2 md:gap-4'>
                    {
                        cast?.map(item => (
                            <ActorCard key={item.id} actor={item}/>
                        ))
                    }
                </div>
            </>
            
        }
        
    </div>
  )
}

export default Cast