import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Movies from '../components/Movies'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className="bg-[#1B1F32]">
        <Navbar/>
        <Banner movie={null}/>
        <Movies title="Movies for you"/>
        <Footer/>
    </div>
  )
}

export default Home