// Import necessary modules and components from external libraries
import React from 'react'; 
import { AiFillYoutube } from 'react-icons/ai'; 
import { FaTwitterSquare, FaInstagramSquare, FaFacebookSquare } from 'react-icons/fa'; 
import { Link } from 'react-router-dom'; 


function Footer() {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear(); 

  return (
    <>
      {/* Footer section with a grid layout, centered content, and spacing */}
      <footer className='grid justify-center items-center mt-20 space-y-4'>
        
        <div className='flex items-center justify-center space-x-2 text-3xl pt-5'>
          <FaFacebookSquare className='w-5 h-5' />
          <FaInstagramSquare className='w-5 h-5' />
          <FaTwitterSquare className='w-5 h-5' />
          <AiFillYoutube className='w-5 h-5' />
        </div>
        <div className='flex items-center justify-center space-x-2 font-bold text-xs md:text-lg'>
          <Link>Conditions of Use</Link>
          <Link>Privacy & Policy</Link>
          <Link>Press Room</Link>
        </div>
        {/* Copyright notice */}
        <div className=''>
          {/* Display the copyright notice with the current year and author's name */}
          <p className='text-xs md:text-sm text-center font-bold text-gray-400'>{`© ${currentYear} MovieBox by Adriana Eka Prayudha`}</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
