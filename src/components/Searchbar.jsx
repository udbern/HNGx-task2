import React from 'react'
import { BiSearch } from 'react-icons/bi';



function Searchbar() {
  return (
    <>
      <div className="flex items-center bg-transparent border-2 border-[#D1D5DB] shadow-3xl rounded-md p-2 w-[525px]">
        <input
          type="text"
          placeholder="What do you want to watch"
          className="flex-1 bg-transparent focus:outline-none"
        />
        <BiSearch className='text-2xl cursor-pointer'/>
      </div>
    </>
  )
}

export default Searchbar