import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { IoTicketOutline } from "react-icons/io5";
import { TfiMenuAlt } from "react-icons/tfi";
import Mobile from '../components/MobileSidaebar'
import { BsFillPlayBtnFill } from "react-icons/bs";

const key = "420ea1ce6b91149d335150a115e26337";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`
        );
        setMovie(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movie details:", error);
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);
  console.log(movie);

  const formatRuntime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  };

  const formatReleaseDate = (dateString) => {
    const date = new Date(dateString);
    return date.toUTCString();
  };


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <section className="flex">
        <div className={`md:hidden absolute top-0 bg-white w-[60%] shadow-xl z-20  rounded-md ${isSidebarOpen ? '' : 'hidden'}`}>
          <Mobile />
        </div>
        <div className="hidden md:flex md:flex-[3] lg:flex-[2]">
          <Sidebar />
        </div>
        <div className="flex-[7] p-5 ">
          <div className="md:hidden flex justify-end text-2xl pb-2 ">
            <div className="bg-[#BE123C] w-8 h-8 md:w-[36px] md:h-[36px] rounded-full flex flex-col justify-center items-center space-y-1 cursor-pointer" onClick={toggleSidebar}>
              <div className="bg-white w-4 h-0.5 md:w-6 md:h-1"></div>
              <div className="bg-white w-4 h-0.5 md:w-6 md:h-1"></div>
            </div>
          </div>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div>
              <div className="  relative h-60 md:h-[300px] lg:h-[449px] w-full rounded-xl overflow-hidden">
                <img
                  className="object-cover w-full h-full "
                  src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
                  alt={movie?.title}
                  loading="lazy"
                />
                  <div className="absolute  top-0 right-0 w-full h-60 md:h-[300px] lg:h-[449px] rounded-xl overflow-hidden flex justify-center  items-center  ">
                    <BsFillPlayBtnFill className=" hover-text-black text-white motion-safe:animate-pulse  duration-500 cursor-pointer  text-7xl"/>
                </div>
              </div>
              <div className=" flex-wrap md:flex-nowrap md:flex  text-left  items-center md:space-x-4 p-2 text-[#404040] lg:text-[23px] font-normal ">
                <p data-testid="movie-title">{movie?.title}</p>
                <p data-testid="movie-release-date">
                  {formatReleaseDate(movie?.release_date)}
                </p>
                <p data-testid="movie-runtime">
                  {formatRuntime(movie?.runtime)}
                </p>
              </div>
              <div className="flex-wrap  md:flex   ">
                <div className="flex-[3] p-2 space-y-3">
                  <p
                    data-testid="movie-overview"
                    className="text-[#333] font-semibold  md:text-sm lg:text-xl"
                  >
                    {movie?.overview}
                  </p>
                  <p>Directors: {movie?.directors}</p>
                  <p>Actors: {movie?.actors}</p>
                  <p>Stars: {movie?.stars}</p>
                  <div>
                    <button className=" bg-[#BE123C] hover:bg-[#a13b54] duration-300 ease-in-out text-[#FFFFFF]  px-10 py-2  rounded-xl ">
                      Top-rated movie
                    </button>
                  </div>
                </div>
                <div className="flex-[2]">
                  <div className="grid p-2 justify-center space-y-5">
                    <button className="bg-[#BE123C] hover:bg-[#a13b54] duration-300 ease-in-out  py-2 px-6 rounded-lg text-[#FFFFFF]  flex items-center justify-center gap-2 ">
                      <IoTicketOutline />
                      See Showtimes
                    </button>
                    <button className="flex  md:text-sm lg:text-xl items-center justify-center gap-2 bg-[#be123c19] hover:bg-[#af708119] duration-300 ease-in-out py-2 px-6 rounded-lg">
                      <TfiMenuAlt />
                      More watch options
                    </button>
                    <div className="relative grid grid-cols-3 gap-1 rounded-lg overflow-hidden">
                      <img
                        src="https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg"
                        alt=""
                      />
                      <img
                        src="https://goodmovieslist.com/best-movies/movie-posters/tt0120623.jpg"
                        alt=""
                      />
                      <img
                        src="https://www.dreamworks.com/storage/movies/kung-fu-panda/posters/kung-fu-panda-poster-1.jpg"
                        alt=""
                      />

                      <div className="absolute  bottom-0 h-10 w-full   text-white">
                        <button className="  relative w-full h-full  flex items-center text-xs justify-center gap-1">
                          <TfiMenuAlt className="text-xl " /> The Best Movies and Shows in September
                        </button>
                        <div className="absolute inset-0 flex items-center justify-center bg-black  opacity-40 hover:opacity-40 transition-opacity duration-300">
                        </div>
                      </div>


                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default MovieDetails;
