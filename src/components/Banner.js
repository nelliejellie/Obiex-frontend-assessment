import React from 'react'
import { AiFillStar,AiFillInfoCircle } from 'react-icons/ai';
import { BiPlayCircle } from 'react-icons/bi';

function Banner() {
  return (
    <section>
        <div className="flex flex-col bg-gradient-to-br from-[#1D283C] to-blue-700 bg-cover bg-center h-[693px]" style={{ backgroundImage: "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5298bac0-b8bf-4c80-af67-725c1272dbb0/ddmho63-fc0b481a-47f0-47a0-9dac-ea1f74b52c5d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUyOThiYWMwLWI4YmYtNGM4MC1hZjY3LTcyNWMxMjcyZGJiMFwvZGRtaG82My1mYzBiNDgxYS00N2YwLTQ3YTAtOWRhYy1lYTFmNzRiNTJjNWQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.5rVpxh1eTMN_px5GyQDN5vkd2tXnGJGuE1r8K8hjiX8')", filter: "brightness(0.7) contrast(1.4) saturate(1.1) blur(0px)"}}>
            <div className='ml-20 mt-48'>
                <div>
                    <small className='text-white'><span className='text-yellow-300'>Featured</span> | 2019 | Action, Sci-fi, Drama </small>
                    <h1 className='text-white text-3xl font-bold max-w-[400px]'>
                        Star Wars: The Rise of Skywalker
                    </h1>
                    <div className='mt-6 text-white flex flex-row items-center space-x-2'>
                        <AiFillStar className="text-yellow-500"/>
                        <small>9.0</small>
                        <small className='border border-white rounded-xl px-2'>18+</small>
                    </div>
                    <div className='mt-6'>
                        <p className='text-white max-w-[500px]'>
                            The revival of Emperor Palpatine resurrects
                            the battle between the Resistance and the
                            First Order while the Jedi's legendary
                            conflict with the Sith Lord comes to a 
                            head.
                        </p>
                    </div>
                    <div className='mt-8 text-white flex flex-row space-x-2'>
                        <button className='w-[146px] h-[44px] flex flex-row justify-center items-center bg-blue-500 rounded-md'>
                            <BiPlayCircle className='text-white'/>
                            <span>Watch Now</span>
                        </button>
                        <button className='flex flex-row w-[146px] h-[44px] justify-center items-center bg-[#21354A] rounded-md'>
                            <AiFillInfoCircle/>
                            <span>Learn more</span>
                        </button>
                    </div>
                </div>
            </div> 
        </div>
    </section>
  )
}

export default Banner