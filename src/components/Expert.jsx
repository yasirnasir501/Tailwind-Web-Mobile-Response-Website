import React from 'react'

const Expert = () => {
    return (
        <div className='max-w-[1240px] p-2 mx-auto my-10  md:grid grid-cols-2'>
            <div className=' col-span-1 md:w-[80%]'>
                <img src="https://imgd.aeplcdn.com/0x0/n/cw/ec/27074/civic-exterior-right-front-three-quarter-148156.jpeg" />
            </div>
            <div className=' col-span-1 flex flex-col justify-center m-4 mx-2'>
                <h1 className='text-[#7f1d1d] font-bold text-2xl my-3 ml-5'>Welcome To Yasir Show Room</h1>
                <p className='text-1xl ml-5 font-semibold text-justify mx-auto'>It's difficult to compare the Audi and the Honda Civic directly, as they are two very different types of vehicles. The Audi is a luxury car, while the Honda Civic is a compact car.</p>
                <button className='md:w-[22%] bg-black text-white p-3 rounded ml-5 mt-3 '>Get Started</button>
            </div>
        </div>
    )
}

export default Expert
