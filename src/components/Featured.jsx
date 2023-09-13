// Import necessary modules and components from external libraries
import React from 'react'; 
import { Link } from 'react-router-dom'; 
import { AiOutlineRight } from 'react-icons/ai'; 


function Featured() {
  return (
    <>
      {/* Start of a section with max width and centered */}
      <section className='max-w-6xl mx-auto'>
        <div className='flex justify-between items-center pt-10'>
          <h2 className='text-4xl font-bold '>Top 10 movies</h2>
          <Link to='' className='text-red-700 flex text-lg items-center gap-2 '>see all<AiOutlineRight /></Link>
        </div>
      </section>
    </>
  );
}


export default Featured;
