import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import ActorCard from './ActorCard';

function Cast({cast}) {
  return (
    <div className='ml-20 mt-10'>
        <div className='w-[80%] flex flex-row items-center justify-between'>
            <h2 className='text-white mb-4'>Cast</h2>
            <div className='flex flex-row space-x-4'>
                <AiOutlineArrowLeft className='text-blue-400 text-sm border border-blue-400 rounded-full'/>
                <AiOutlineArrowRight className='text-blue-400 text-sm border border-blue-400 rounded-full'/>
            </div>
        </div>
        <div className='flex flex-row space-x-2 overflow-auto'>
            {
                cast?.map(item => (
                    <ActorCard key={item.id} actor={item}/>
                ))
            }
        </div>
    </div>
  )
}

export default Cast