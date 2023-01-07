import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {
  return (
    <div className='py-[100px] px-2'>
      <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 gap-8'>

        <div className='shadow-xl h-[500px] flex flex-col py-4 hover:scale-105 duration-500'>
          <img className='w-20 mx-auto mt-[-40px] bg-white' src={Single} alt="/" />
          <h1 className='text-2xl font-bold text-center py-10'>Audi Latest Model</h1>
          <p className='text-3xl font-bold text-center '>$25,000</p>
          <div className='text-center font-medium'>
            <p className='mt-12'>Imagine having EXCLUSIVE Coke Ball Shaped Snack Bowl! Isn't that just GOALS?🥰</p>
            <p className='mt-8 p-2'>Place your order of a minimum Rs.2500  & relive soccer memories by getting Coca-Cola Ball Shaped Snack Bowl for free🤩</p>
          </div>
          <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
        </div>

        <div className='shadow-xl flex flex-col  p-4 md:my-0 my-12 mt-19 bg-gray-100 hover:scale-105 duration-500' >
          <img className='w-20 mx-auto mt-[-40px] bg-transparent' src={Double} alt="/" />
          <h1 className='text-2xl font-bold text-center py-10'>Audi Latest Model</h1>
          <p className='text-3xl font-bold text-center '>$25,000</p>
          <div className='text-center font-medium'>
            <p className='mt-12'>Imagine having EXCLUSIVE Coke Ball Shaped Snack Bowl! Isn't that just GOALS?🥰</p>
            <p className='mt-8 p-2'>Place your order of a minimum Rs.2500  & relive soccer memories by getting Coca-Cola Ball Shaped Snack Bowl for free🤩</p>
          </div>
          <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
        </div>

        <div className='w-full shadow-xl flex flex-col p-4 my-4 hover:scale-105 duration-500'>
          <img className='w-20 mx-auto mt-[-40px] bg-white' src={Triple} alt="/" />
          <h1 className='text-2xl font-bold text-center py-10'>Audi Latest Model</h1>
          <p className='text-3xl font-bold text-center '>$25,000</p>
          <div className='text-center font-medium'>
            <p className='mt-12'>Imagine having EXCLUSIVE Coke Ball Shaped Snack Bowl! Isn't that just GOALS?🥰</p>
            <p className='mt-8 p-2'>Place your order of a minimum Rs.2500  & relive soccer memories by getting Coca-Cola Ball Shaped Snack Bowl for free🤩</p>
          </div>
          <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
        </div>

      </div>
    </div>
  )
}

export default Cards