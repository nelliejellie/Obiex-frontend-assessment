import React, {useState, useEffect, useRef} from 'react'
import MovieCard from './MovieCard'
import { AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import axios from 'axios';



function Movies({title, showRecommended}) {
    const [data, setData] = useState(null)
    const [scrollX, setscrollX] = useState(0);
    const [scrolEnd, setscrolEnd] = useState(false);
    const scrl = useRef()

    
    useEffect(()=>{
        getMovies()
    },[])

    const getMovies = () =>{
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=1436e9e514ce79c11d892d75a9351785')
        .then(response => setData(response.data.results))
        .catch(error => console.log(error));
    }

    // for scrolling
    const slide = (shift) => {
        scrl.current.scrollLeft += shift;
        setscrollX(scrollX + shift); // Updates the latest scrolled postion

        //For checking if the scroll has ended
        if (
        Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
        scrl.current.offsetWidth
        ) {
        setscrolEnd(true);
        } else {
        setscrolEnd(false);
        }
    };
  return (
    <section className='ml-20 md:ml-4 mt-10 '>
        {
            showRecommended &&
            <>
                <div className='w-[80%] flex flex-row items-center justify-between md:hidden'>
                    <h2 className='text-white mb-4'>{title}</h2>
                    <div className='flex flex-row space-x-4'>
                        <AiOutlineArrowLeft onClick={() => slide(-50)} className='text-blue-400 text-sm border border-blue-400 rounded-full'/>
                        <AiOutlineArrowRight onClick={() => slide(+50)} className='text-blue-400 text-sm border border-blue-400 rounded-full'/>
                    </div>
                </div>
                <div ref={scrl} className='flex flex-row space-x-2 overflow-hidden md:grid md:grid-cols-2 md:gap-4'>
                    {
                        data?.map(item => (
                            <MovieCard key={item.id} movie={item}/>
                        ))
                    }
                </div>  
            </>
        }
        
    </section>
  )
}

export default Movies