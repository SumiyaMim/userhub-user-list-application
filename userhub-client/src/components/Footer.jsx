/* eslint-disable no-unused-vars */
import React from 'react'
import { BsFacebook, BsPinterest } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { TiSocialYoutubeCircular } from "react-icons/ti";

export default function Footer() {
  return (
    <div>
      <div className='bg-black py-10'>
            <h1 className='text-2xl font-bold text-[#f91942] text-center mb-4'>User<span className='text-white'>Hub</span></h1>
            <div className='text-white text-xl flex items-center gap-4 justify-center mb-6'>
                <i><BsFacebook></BsFacebook></i>
                <i><BsPinterest></BsPinterest></i>
                <i className='text-[28px]'><TiSocialYoutubeCircular></TiSocialYoutubeCircular></i>
                <i className='text-[24px]'><AiFillTwitterCircle></AiFillTwitterCircle></i>
            </div>
            <p className='text-xs text-zinc-300 text-center'>Copyright © {new Date().getFullYear()} UserHub. All Right Reserved</p>
    </div>
    </div>
  )
}
