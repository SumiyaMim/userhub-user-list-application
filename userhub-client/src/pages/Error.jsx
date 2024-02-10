/* eslint-disable no-unused-vars */
import Lottie from 'lottie-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { BiArrowBack } from "react-icons/bi";
import error from '../assets/error.json'

export default function Error() {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='w-[200px] md:w-[300px] lg:w-[400px] mx-auto my-20 md:my-10'>
            <Lottie animationData={error} loop={true} />
        </div>
        <div className='mb-5'>
            <Link to='/'>
                <button className='flex items-center gap-2 bg-black px-4 py-2 rounded-lg text-white'>
                    <i><BiArrowBack className='text-xl'></BiArrowBack></i>
                    <p className='text-sm font-medium'>Back to home</p>
                </button>
            </Link>
        </div>
    </div>
  )
}
