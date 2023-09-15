// Import necessary modules and components from external libraries
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom'; // Import Link from React Router

const API_KEY = "420ea1ce6b91149d335150a115e26337";
const BASE_URL = "https://api.themoviedb.org/3";
const POSTER_BASE_URL = "https://image.tmdb.org/t/p/w185"; // Adjust image size as needed

function Searchbar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      setShowResults(false);
      return;
    }

    const searchUrl = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`;

    axios.get(searchUrl)
      .then((response) => {
        const movies = response.data.results.slice(0, 5); // Limit to the top 5 results
        setResults(movies);
        setShowResults(true);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [query]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <div className="relative">
        <div className="flex items-center bg-transparent border-2 border-[#D1D5DB] shadow-3xl rounded-md p-2 lg:w-[525px]">
          {/* Search input field */}
          <input
            type="text"
            placeholder="What do you want to watch"
            className="flex-1 text-xs px-10 bg-transparent focus:outline-none "
            onChange={handleInputChange}
            value={query}
          />
          <BiSearch className='hidden md:flex text-2xl cursor-pointer' />
        </div>
        {showResults && (
          <div className="absolute top-[calc(100%+10px)] left-0 right-0 lg:w-[525px] bg-white border border-[#D1D5DB] rounded-md shadow-md">
            <ul>
              {results.map((movie) => (
                <li key={movie?.id} className="flex items-center p-2 border-b">
                  <Link to={`/movie/${movie?.id}`}> {/* Link to MovieDetails */}
                    <img
                      src={`${POSTER_BASE_URL}${movie?.poster_path}`}
                      alt={movie?.title}
                      className="w-10 h-10"
                    />
                    <p className="text-black ml-2">{movie?.title}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Searchbar;
