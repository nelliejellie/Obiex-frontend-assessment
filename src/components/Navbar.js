import React from 'react'
import { BsSearch } from 'react-icons/bs';

function Navbar() {
  return (
    <section className='h-[80px] w-full bg-[#1D283C] flex flex-row justify-around md:justify-between md:px-4 items-center'>
        <div className='flex flex-row items-center space-x-2'>
            <img 
                src={require('../assets/images/logo.png')}
                alt='logo'
            />
            <span className='text-white font-bold'>Vader</span>
        </div>
        <div>
            <div className='border border-gray-600 rounded-md mt-2 bg-[#1D283C] md:hidden flex flex-row items-center space-x-2 p-2 w-[331px]'>
                <BsSearch className='text-white'/>
                <input type="text" placeholder='Search' className='outline-0 bg-[#1D283C] text-white w-[100%]'/>
            </div>
            <BsSearch className='text-[#1D283C] md:text-white md:w-[24px] md:h-[24px]'/>
        </div>
    </section>
  )
}

export default Navbar