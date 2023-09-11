import React from 'react'
import Logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'
import Search from './Searchbar'

function Navbar() {
  return (
    <>
      <nav  className=' absolute z-[100] w-full'>
          <div className='container mx-auto bg-transparent flex justify-between items-center text-white p-5'>
            <Link to='/'>
              <img src={Logo} alt="" />
            </Link>
            <div className=' hidden md:flex text-whiite'>
              <Search  />
            </div>
            <div className='flex items-center gap-[27px]'>
              <Link className='text-lg' to='/sign-in'>Sign in</Link>
            <div className='bg-[#BE123C]  w-[36px] h-[36px] rounded-full flex flex-col justify-center items-center space-y-1 cursor-pointer'>
                <div className='bg-white w-6 h-1'></div>
              <div className='bg-white w-6 h-1'></div>
              </div>
            </div>
          </div>
      </nav>
    </>
  )
}

export default Navbar