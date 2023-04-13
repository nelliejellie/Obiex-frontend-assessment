import React, {useState, useEffect} from 'react'
import MovieCard from './MovieCard'
import { AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import axios from 'axios';



function Movies({title, showRecommended}) {
    const [data, setData] = useState(null)

    useEffect(()=>{
        getMovies()
    },[])

    const getMovies = () =>{
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=1436e9e514ce79c11d892d75a9351785')
        .then(response => setData(response.data.results))
        .catch(error => console.log(error));
    }
  return (
    <section className='ml-20 md:ml-4 mt-10'>
        {
            showRecommended &&
            <>
                <div className='w-[80%] flex flex-row items-center justify-between md:hidden'>
                    <h2 className='text-white mb-4'>{title}</h2>
                    <div className='flex flex-row space-x-4'>
                        <AiOutlineArrowLeft className='text-blue-400 text-sm border border-blue-400 rounded-full'/>
                        <AiOutlineArrowRight className='text-blue-400 text-sm border border-blue-400 rounded-full'/>
                    </div>
                </div>
                <div className='flex flex-row space-x-2 overflow-auto md:grid md:grid-cols-2 md:gap-4'>
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