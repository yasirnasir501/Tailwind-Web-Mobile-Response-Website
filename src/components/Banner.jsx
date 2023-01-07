import React from 'react'
import Typed from 'react-typed';

const Banner = () => {
  return (
    <div className='bg-[#2699fb] w-full py-[90px]'>
      <div className='max-w-[1240px] mx-auto font-bold text-center'>
        <div className='text-xl md:text-5xl'>Learn With Us</div>
        <div className='text-white text-xl md:text-[60px] md:py-6'>Grow With US</div>
        <div className='text-white text-xl md:text-4xl'>Learn
          <Typed className='pl-2'
            strings={['AUDI', 'LandCruiser', 'Corolla']}
            typeSpeed={150}
            loop={true}
            backSpeed={100}/>
        </div>

        <button className='bg-black text-white p-3 rounded mt-2'>Get Started</button>
      </div>
    </div>
  )
}

export default Banner;