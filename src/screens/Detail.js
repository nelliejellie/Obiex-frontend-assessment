import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Movies from '../components/Movies';
import Footer from '../components/Footer';
import Cast from '../components/Cast';
import axios from 'axios';


function Detail() {
    const {id} = useParams()
    const [movie, setMovie] = useState(null)
    const [cast, setCast] = useState(null)
    const [showCast, setShowcast] = useState(true)
    const [showRecommended, setShowRecommended] = useState(true)
    const [handleSwitch, setHandleSwitch] = useState(false)

    useEffect(()=>{
        getMovieDetail()
        getMovieCasts()
    },[])


    const getMovieDetail = () =>{
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=1436e9e514ce79c11d892d75a9351785&language=en-US`)
        .then(response => setMovie(response.data))
        .catch(error => console.log(error));
    }

    const getMovieCasts = () =>{
        axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=1436e9e514ce79c11d892d75a9351785&language=en-US`)
        .then(response => setCast(response.data.cast))
        .catch(error => console.log(error));
    }

    const handleShowCast = () =>{
        setShowcast(!showCast)
        setHandleSwitch(false)
    }
    const handleShowRecommended = () =>{
        setShowcast(false)
        setHandleSwitch(true)
    }
  return (
    <section className='bg-[#1B1F32]'>
        <Navbar/>
        <Banner movie={movie}/>
        <div className=' hidden md:flex md:flex-row md:space-x-5 md:mb-6 md:mt-8 md:ml-4'>
            <p className={handleSwitch === false ?`md:text-white md:border-b-blue-400 md:border-b-2` : `md:text-gray-400`} onClick={handleShowCast}>Cast</p>
            <p className={handleSwitch === true ?`md:text-white md:border-b-blue-400 md:border-b-2` : `md:text-gray-400`} onClick={handleShowRecommended}>Recommended</p>
        </div>
        <Cast cast={cast} showCast={showCast}/>
        <Movies title="you might also like" showRecommended={showRecommended}/>
        <Footer/>
    </section>
  )
}

export default Detail