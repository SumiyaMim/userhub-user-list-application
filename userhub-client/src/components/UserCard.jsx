/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom';

export default function UserCard({ user }) {

    const { _id, firstName, lastName, image, email, address, company } = user;

  return (
    <div>
      <div className='shadow-md rounded-xl py-10 px-6 border border-[#eaeaea] h-[320px]'>
      <img src={image} className='w-28 h-28 mx-auto mb-4'/>
      <div className='text-center'>
        <Link to={`user/details/${_id}`}>
             <p className='text-lg font-semibold'>{firstName} {lastName}</p>
        </Link>
        <p className='text-sm mb-3 text-zinc-500'>{email}</p>
        <p className='text-sm'><strong>Address:</strong> <span className='text-zinc-500'>{address.address}</span></p>
        <p className='text-sm'><strong>Company Name:</strong> <span className='text-zinc-500'>{company.name}</span></p>
      </div>
    </div>
    </div>
  )
}
