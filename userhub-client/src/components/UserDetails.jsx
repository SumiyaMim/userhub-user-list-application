/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom';

export default function UserDetails() {

    const [user, serUser] = useState({})

    const {id} = useParams();
    // console.log(id)
    const users = useLoaderData();
    // console.log(users)

    // get single user
    useEffect(() => {
        const findUser = users?.find((user) => user._id === id)
        serUser(findUser)
        // console.log(findUser)
    },[id, user])

  return (
    <div className='py-20 px-11 md:px-12 lg:px-60 max-w-md md:max-w-3xl lg:max-w-7xl mx-auto'>
      <h1 className='font-semibold text-2xl text-center mb-2'>User Details</h1>
      <hr className="border-[1.5px] border-[#f91942] w-16 mx-auto mb-16" />
      <div className='shadow-md rounded-xl py-12 px-6 border border-[#eaeaea]'>
        <div className='flex flex-col md:flex-row justify-center items-center gap-2 gap-10'>
            <div className='md:w-1/2 mx-auto'>
                <img src={user.image} className="w-48 md:w-60 h-48 md:h-full mx-auto" alt="User" />
            </div>
            <div className='md:w-1/2'>
                <p className='text-gray-600 mb-1'><strong>Name:</strong> <span className='text-zinc-500'>{user.firstName} {user.lastName}</span></p>
                <p className="text-gray-600 mb-1"><strong>Email:</strong> {user.email}</p>
                {user.address && (
                    <p className="text-gray-600 mb-1"><strong>Address:</strong> {user.address.address}</p>
                )}
                {user.company && (
                    <p className="text-gray-600 mb-1"><strong>Company Name:</strong> {user.company.name}</p>
                )}
            </div>
        </div>
      </div>
    </div>
  )
}
