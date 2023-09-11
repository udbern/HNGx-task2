import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AiOutlineRight, AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

function Row({ title, fetchURL }) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [like, setLike] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(fetchURL);
                setMovies(response.data.results.slice(0, 10));
                setLoading(false);
            } catch (error) {
                console.error('Error fetching top movies:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, [fetchURL]);

    return (
        <section className='max-w-6xl mx-auto'>
            <div className='flex justify-between items-center pt-10 pb-10 px-5'>
                <h2 className=' text-xl md:text-4xl font-bold capitalize'>{title}</h2>
                <Link to='' className='text-red-700 flex text-lg items-center gap-2'>
                    see all<AiOutlineRight />
                </Link>
            </div>
            {loading ? (
                <p className='text-2xl text-center '>Loading...</p>
            ) : (
                <div>
                    <Link className='grid justify-center  items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-2 h-full   md:gap-5  px-5  '>
                        {movies.map((item, id) => (
                            <div data-testid='movie-card' key={id} className='  border h-[230px] md:h-[490px] shadow-3xl '>
                                <div className=' relative w-full group  h-36 md:h-[370px]'>
                                    <img data-testid='movie-poster'
                                        className='  w-full h-full  object-cover '
                                        src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
                                        alt={item?.title}
                                    />
                                    {like ? <AiOutlineHeart className=' hidden group-hover:block absolute border top-3 right-3  cursor-pointer text-3xl text-white' /> : <AiFillHeart className=' text-3xl hidden group-hover:block cursor-pointer text-gray-100 absolute border top-3 right-3 h-5 w-5  md:h-8 md:w-8 p-1 bg-gray-400 rounded-full ' />}
                                </div>
                                <h1 data-testid='movie-title' className=' p-1 capitalize font-bold  text-xs md:text-xl' >{item?.title}</h1>
                                <p data-testid='movie-release-date' className='p-1 text-xs md:text-sm' >{item?.release_date}</p>
                            </div>
                        ))}
                    </Link>
                </div>
            )}
        </section>
    );
}

export default Row;
