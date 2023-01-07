import React from 'react'

const NewsLetter = () => {
    return (
        <div className='bg-[#2699fb] p-4'>
            <div className='max-w-[1240px] mx-auto md:flex justify-between py-[50px]'>
                <div className='m-2'>
                    <h1 className='text-[20px] md:text-4xl text-white font-bold'>Let's Start Driving?</h1>
                    <span className='text-white'>Sign-up to our newsletter and stay up to date.</span>
                </div>
                <div className='m-2'>
                    <input type="text" placeholder='Enter Email' className='sm:w-full rounded mb-2 p-3 mr-2 text-slate-600' />
                    <button className='md:w-full bg-black text-white p-2 rounded '>Get Started</button>
                    <br />
                    <p className='text-white'>We care both the Protection of your data. Read Our <br /> <a href="#" className='text-black font-bold' >Privacy Policy</a> </p>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter
