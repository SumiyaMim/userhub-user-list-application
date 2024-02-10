/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import { useLoaderData } from 'react-router-dom';
import Users from './Users';

export default function Header() {

  const allUsers = useLoaderData();
  // console.log(allUsers)

  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleSearch = (searchName) => {
    const search = searchName.toLowerCase().trim();
    const filtered = allUsers.filter((user) =>
      user.firstName.toLowerCase().includes(search) ||
      user.lastName.toLowerCase().includes(search) ||
      `${user.firstName} ${user.lastName}`.toLowerCase().includes(search)
    );

    setFilteredUsers(filtered);
    // console.log(filtered)
  };

  return (
    <div>
      <div className="relative bg-cover bg-[url('https://i.ibb.co/Yhm7sFN/banner.jpg')] bg-no-repeat">
      <div className="absolute inset-0 bg-black opacity-50"></div>
        <Navbar/>
        <Banner onSearch={handleSearch}/>
      </div>
      <Users users={filteredUsers.length > 0 ? filteredUsers : allUsers} />
    </div>
  )
}
