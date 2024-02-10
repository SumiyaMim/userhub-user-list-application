/* eslint-disable no-unused-vars */
import React from 'react';

export default function AddUser() {
  
  const handleAddUser = (event) => {
    event.preventDefault();

    const form = event.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const image = form.image.value;
    const address = form.address.value;
    const company = form.company.value;

    const newUser = { firstName, lastName, email, image, address: { address }, company: { name: company } };
    // console.log(newUser);

    // send user to the server
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        window.location.reload();
    })
  };

  return (
    <div className='bg-gray-100'>
      <div className='py-20 px-12 md:px-14 lg:px-16 max-w-md md:max-w-3xl lg:max-w-7xl mx-auto'>
        <h1 className='font-semibold text-2xl text-center mb-2'>Add User</h1>
        <hr className='border-[1.5px] border-[#f91942] w-16 mx-auto mb-16' />
        <form onSubmit={handleAddUser}>
          <div className='flex flex-col md:flex-row md:gap-6 lg:gap-10 md:mb-4'>
            <div className='form-control md:w-1/2 mb-2 md:mb-0'>
              <label className='label'>
                <span className='label-text font-medium text-gray-600 text-base'>First Name</span>
              </label>
              <input
                type='text'
                name='firstName'
                placeholder='First Name'
                className='input rounded w-full border-none outline-none focus:outline-none placeholder:text-sm text-sm'
                required
              />
            </div>
            <div className='form-control md:w-1/2 mb-2 md:mb-0'>
              <label className='label'>
                <span className='label-text font-medium text-gray-600 text-base'>Last Name</span>
              </label>
              <input
                type='text'
                name='lastName'
                placeholder='Last Name'
                className='input rounded w-full border-none outline-none focus:outline-none placeholder:text-sm text-sm'
                required
              />
            </div>
          </div>
          <div className='flex flex-col md:flex-row md:gap-6 lg:gap-10 md:mb-4'>
            <div className='form-control md:w-1/2 mb-2 md:mb-0'>
              <label className='label'>
                <span className='label-text font-medium text-gray-600 text-base'>Email</span>
              </label>
              <input
                type='email'
                name='email'
                placeholder='Email'
                className='input rounded w-full border-none outline-none focus:outline-none placeholder:text-sm text-sm'
                required
              />
            </div>
            <div className='form-control md:w-1/2 mb-2 md:mb-0'>
              <label className='label'>
                <span className='label-text font-medium text-gray-600 text-base'>Image URL</span>
              </label>
              <input
                type='text'
                name='image'
                placeholder='Image URL'
                className='input rounded w-full border-none outline-none focus:outline-none placeholder:text-sm text-sm'
                required
              />
            </div>
          </div>
          <div className='flex flex-col md:flex-row md:gap-6 lg:gap-10 md:mb-8'>
            <div className='form-control md:w-1/2 mb-2 md:mb-0'>
              <label className='label'>
                <span className='label-text font-medium text-gray-600 text-base'>Address</span>
              </label>
              <input
                type='text'
                name='address'
                placeholder='Address'
                className='input rounded w-full border-none outline-none focus:outline-none placeholder:text-sm text-sm'
                required
              />
            </div>
            <div className='form-control md:w-1/2 mb-2 md:mb-0'>
              <label className='label'>
                <span className='label-text font-medium text-gray-600 text-base'>Company Name</span>
              </label>
              <input
                type='text'
                name='company'
                placeholder='Company Name'
                className='input rounded w-full border-none outline-none focus:outline-none placeholder:text-sm text-sm'
                required
              />
            </div>
          </div>

          <div className='flex justify-center mx-auto'>
            <button className='mt-8 px-5 py-2 text-white font-medium rounded-lg text-sm bg-[#f91942] hover:bg-[#d70e2b]'>
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
