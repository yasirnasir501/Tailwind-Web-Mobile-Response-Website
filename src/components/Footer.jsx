import React from 'react'
import {
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-[#2699fb] mx-auto py-[50px] px-4 md:grid lg:grid-cols-3 gap-8 text-white'>
            <div className='mt-[80px]'>
                <h1 className='text-3xl text-center mt-[-100px] font-bold text-black'>Hello Yasir</h1>
                <p className='text-center m-6'>The capacity to be alone is the capacity to love. It may look paradoxical to you, but it is not. It is an existential truth: only those people who are capable of being alone are capable of love, of sharing</p>
                <div className='flex justify-between md:w-[75%] my-6 mx-auto'>
                    <FaFacebookSquare size={30} />
                    <FaInstagram size={30} />
                    <FaTwitterSquare size={30} />
                    <FaGithubSquare size={30} />
                </div>
            </div>

            <div className='lg:col-span-2 flex justify-between mt-6'>
                <div className='md:mx-14'>
                    <h6 className='font-medium text-black'>Solution</h6>
                    <ul>
                        <li className='py-2 text-sm'><a href="/">Audi A3</a></li>
                        <li className='py-2 text-sm'><a href="/">Audi A4</a></li>
                        <li className='py-2 text-sm'><a href="/">Audi A5</a></li>
                        <li className='py-2 text-sm'><a href="/">Audi A6</a></li>
                    </ul>
                </div>

                <div className='md:mx-14'>
                    <h6 className='font-medium text-black'>Support</h6>
                    <ul>
                        <li className='py-2 text-sm'>Pricing</li>
                        <li className='py-2 text-sm'>Documentation</li>
                        <li className='py-2 text-sm'>Guides</li>
                        <li className='py-2 text-sm'>API Status</li>
                    </ul>
                </div>
                <div className='md:ml-[80px]'>
                    <h6 className='font-medium text-black'>Company</h6>
                    <ul>
                        <li className='py-2 text-sm'>About</li>
                        <li className='py-2 text-sm'>Blog</li>
                        <li className='py-2 text-sm'>Jobs</li>
                        <li className='py-2 text-sm'>Press</li>
                        <li className='py-2 text-sm'>Careers</li>
                    </ul>
                </div>
                <div className='md:mx-[100px]'>
                    <h6 className='font-medium text-black'>Legal</h6>
                    <ul>
                        <li className='py-2 text-sm'>Claim</li>
                        <li className='py-2 text-sm'>Policy</li>
                        <li className='py-2 text-sm'>Terms</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
