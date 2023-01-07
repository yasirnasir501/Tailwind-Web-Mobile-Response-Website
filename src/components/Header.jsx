import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
const Header = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className='bg-[#2699fb] p-4'>
            <div className='max-w-[1240px] mx-auto py-3 flex justify-between items-center'>
                <div className='text-3xl text-white font-bold'>
                    Hello Yasir
                </div>

                {
                    toggle ? 
                    <AiOutlineClose onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>
                    :
                    <AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>
                }

                <ul className='hidden md:flex text-white gap-10'>
                    <li>Home</li>
                    <li>Company</li>
                    <li>Resources</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                {/* Responsive Menu */}

                <ul className={`duration-300 h-screen w-full md:hidden text-white fixed bg-black left-[-100%] top-[92px] pl-5
                    ${toggle ? 'left-[0]' : 'left-[-100%]'}`}>
                    <li className='py-5'>Home</li>
                    <li className='py-5'>Company</li>
                    <li className='py-5'>Resources</li>
                    <li className='py-5'>About</li>
                    <li className='py-5'>Contact</li>
                </ul>

            </div>

        </div>
    )
}

export default Header;
