/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import UserCard from './UserCard';

export default function Users({ users }) {

  const [sortBy, setSortBy] = useState(""); 

  if (!users) {
    return null; 
  }

  // Sorting logic
  let sortedUsers = [...users];
  if (sortBy === "name") {
    sortedUsers.sort((a, b) => (a.firstName + a.lastName).localeCompare(b.firstName + b.lastName));
  } else if (sortBy === "email") {
    sortedUsers.sort((a, b) => a.email.localeCompare(b.email));
  } else if (sortBy === "company") {
    sortedUsers.sort((a, b) => a.company.name.localeCompare(b.company.name));
  }

  return (
    <div className='py-20 px-3 md:px-5 max-w-md md:max-w-3xl lg:max-w-7xl mx-auto'>
      <h1 className='font-semibold text-2xl text-center mb-2'>Our Users</h1>
      <hr className="border-[1.5px] border-[#f91942] w-16 mx-auto mb-16" />
      <div className='px-8 md:px-[30px] lg:px-12 mb-16 flex justify-end'>
            <div className="form-control w-full flex flex-row justify-end gap-2">
              <label className="label">
                <span className="label-text font-medium text-zinc-400 uppercase">Sort by</span>
              </label>
              <select 
                className="select select-bordered outline-none focus:outline-none"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="">Choose one</option>
                <option value="name">Name</option>
                <option value="email">Email</option>
                <option value="company">Company Name</option>
              </select>
            </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8 lg:px-12 mx-auto gap-8'>
        {sortedUsers.map((user) => (
          <UserCard key={user.id} user={user}></UserCard>
        ))}
      </div>
    </div>
  );
}
