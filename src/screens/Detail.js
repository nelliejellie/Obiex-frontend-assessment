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
  return (
    <section className='bg-[#1B1F32]'>
        <Navbar/>
        <Banner movie={movie}/>
        <Cast cast={cast}/>
        <Movies title="you might also like"/>
        <Footer/>
    </section>
  )
}

export default Detail