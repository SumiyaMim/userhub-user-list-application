/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

export default function Banner({ onSearch }) {

  const [searchName, setSearchName] = useState("");

  const handleSearch = () => {
    const search = searchName.toLowerCase().trim();
    onSearch(search);
  };

  return (
    <div>
     <div className="relative flex flex-col justify-center items-center h-screen lg:h-[471px]">
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-medium text-white mb-1 md:mb-2">
      Find Your Connections
      </h1>
      <h3 className='text-base md:text-xl lg:text-2xl font-light text-white mb-8 md:mb-10'>Stay Connected: Explore Our User Community!</h3>
      <div>
        <div className="relative w-80 md:w-[520px] lg:w-[680px]">
          <input
            type="text"
            placeholder="Search here..."
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            className="input input-bordered h-10 md:h-11 lg:h-12 w-full pl-6 md:pl-8 text-sm rounded-full outline-none focus:outline-none border placeholder:text-sm"
          />
          <button
            onClick={handleSearch}
            className="bg-[#f91942] text-white h-10 md:h-11 lg:h-12 text-sm font-semibold px-6 lg:px-10 absolute top-0 right-0 rounded-l-none rounded-r-full"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}
