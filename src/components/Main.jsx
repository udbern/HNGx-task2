import axios from 'axios';
import React, { useEffect, useState } from 'react';
import requests from '../Requests';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import IMDB from '../assets/imdb.png'
import Tomato from '../assets/tomato.png'

function Main() {
    const [movies, setMovies] = useState([]);

    const movie = movies[Math.floor(Math.random() * movies.length)]

    useEffect(() => {
        axios.get(requests.requestPopular).then((response) => {
            setMovies(response.data.results);
        });
    }, []);
    //console.log(movie)

    const truncateString = (str, num) => {
        if(str?.length > num) {
            return str.slice(0, num) + '...'
        } else{
            return str
        }
    }



    return (
        <div className='w-full h-[600px] text-white overflow-hidden'>
            <div className='w-full h-full relative'>
                <div className='absolute w-full h-[600px] bg-gradient-to-r from-black'></div>
                <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
                <div className=' absolute  w-full  top-[20%] left-[5%] p-4 md:p-8 space-y-4  '>
                    <h1 className=' capitalize w-[404px]  text-white  text-3xl md:text-5xl font-bold '>{movie?.title}</h1>
                    <p className='w-full md:max-w-[70%] lg:max-w-[35%] text-gray-200 ' >{truncateString(movie?.overview, 200)}</p>
                    <div className='flex items-center justify-between  w-60'>
                        <div className='flex items-center  space-x-2  '>
                            <img  src={IMDB} alt="imdb.png" />
                            <p>86.0 / 100</p>
                        </div>
                        <div className='flex items-center space-x-2 '>
                            <img  src={Tomato} alt="rottentomatoes.png" />
                            <p>97%</p>
                        </div>
                    </div>
                    <div className=''>
                        <button className="bg-[#BE123C] flex items-center gap-2 rounded-md hover:bg-[#f33b3b] text-white font-bold py-2 px-4 mt-4 duration-300 ease-in-out  ">
                            <AiOutlinePlayCircle  className='w-5 h-5' />Watch Trailer
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
