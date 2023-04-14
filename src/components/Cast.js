import React, {useState, useRef} from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import ActorCard from './ActorCard';

function Cast({cast, showCast}) {
    const [scrollX, setscrollX] = useState(0);
    const [scrolEnd, setscrolEnd] = useState(false);
    const scrll = useRef()

    // for automatic scrolling
    const slide = (shift) => {
        scrll.current.scrollLeft += shift;
        setscrollX(scrollX + shift); // Updates the latest scrolled postion

        //For checking if the scroll has ended
        if (
            Math.floor(scrll.current.scrollWidth - scrll.current.scrollLeft) <=
            scrll.current.offsetWidth
        ) {
            setscrolEnd(true);
        } else {
            setscrolEnd(false);
        }
    };
  return (
    <div className='ml-20 md:ml-4 mt-10'>
        {
            showCast &&
            <>
                <div className='w-[80%] flex flex-row items-center justify-between md:hidden'>
                    <h2 className='text-white mb-4'>Cast</h2>
                    <div className='flex flex-row space-x-4'>
                        <AiOutlineArrowLeft onClick={() => slide(-50)} className='text-blue-400 text-sm border border-blue-400 rounded-full'/>
                        <AiOutlineArrowRight onClick={() => slide(+50)} className='text-blue-400 text-sm border border-blue-400 rounded-full'/>
                    </div>
                </div>
                <div ref={scrll} className='flex flex-row space-x-2 overflow-hidden md:grid md:grid-cols-2 md:gap-4'>
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