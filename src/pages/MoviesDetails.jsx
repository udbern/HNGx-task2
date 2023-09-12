import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { IoTicketOutline } from "react-icons/io5";
import { TfiMenuAlt } from "react-icons/tfi";

const key = "420ea1ce6b91149d335150a115e26337"; // Your API key

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

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

  return (
    <>
      <section className="flex">
        <div className=" bg-white px-2 md:px-0 absolute md:relative top-0 left-0 w-[60%] md:flex-1 border rounded-r-xl">
          <Sidebar />
        </div>
        <div className="flex-[5] p-5 ">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div>
              <div className=" h-60 md:h-[449px] rounded-xl overflow-hidden">
                <img
                  className="object-cover w-full h-full "
                  src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
                  alt={movie?.title}
                  loading="lazy"
                />
              </div>
              <div className=" flex-wrap md:flex-nowrap md:flex  text-left  items-center md:space-x-4 p-2 text-[#404040] md:text-[23px] font-normal ">
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
                    className="text-[#333] font-semibold  md:text-xl"
                  >
                    {movie?.overview}
                  </p>
                  <p>Directors: {movie?.directors}</p>
                  <p>Actors: {movie?.actors}</p>
                  <p>Stars: {movie?.stars}</p>
                  <div>
                    <button className=" bg-[#BE123C] hover:bg-[#ff124d] duration-300 ease-in-out text-[#FFFFFF]  px-10 py-2  rounded-xl ">
                      Top rated movie
                    </button>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="grid p-2 justify-center space-y-5">
                    <button className="bg-[#BE123C] hover:bg-[#ff124d] duration-300 ease-in-out  py-2 px-6 rounded-lg text-[#FFFFFF]  flex items-center justify-center gap-2 ">
                      <IoTicketOutline />
                      See Showtimes
                    </button>
                    <button className="flex items-center justify-center gap-2 bg-[#be123c19] hover:bg-[#af708119] duration-300 ease-in-out py-2 px-6 rounded-lg">
                      <TfiMenuAlt />
                      More watch options
                    </button>
                    <div className=" relative  grid grid-cols-3 gap-1 rounded-lg overflow-hidden ">
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
                      <button className="absolute bottom-0 h-10 w-full  flex items-center text-xs justify-center gap-1">
                        <TfiMenuAlt className="text-xl" /> The Best Movies and
                        Shows in September
                      </button>
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
