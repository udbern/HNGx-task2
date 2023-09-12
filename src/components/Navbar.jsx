import React, { useState, useEffect } from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import Search from "./Searchbar";
import { BiSearch } from "react-icons/bi";

function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <nav className="absolute z-[100] w-full">
        <div className="container mx-auto bg-transparent flex justify-between items-center text-white p-10">
          <Link className="w-28 md:w-40" to="/">
            <img src={Logo} alt="logo.png" />
          </Link>
          <div className={`hidden md:flex ${isSearchOpen ? "opacity-100" : "opacity-0 transition-opacity duration-300 ease-in-out"}`}>
            <Search />
          </div>
          <div className={`absolute top-20 px-20 left-0 right-0 md:hidden ${isSearchOpen ? "opacity-100" : "opacity-0 transition-opacity duration-300 ease-in-out"}`}>
            <Search />
          </div>

          <div className="flex items-center gap-[27px]">
            <div
              className="md:hidden cursor-pointer border border-red-600"
              onClick={toggleSearch}
            >
              <BiSearch className="text-2xl" />
            </div>

            <Link className="text-sm md:text-lg" to="">
              Sign in
            </Link>
            <div className="bg-[#BE123C] w-8 h-8 md:w-[36px] md:h-[36px] rounded-full flex flex-col justify-center items-center space-y-1 cursor-pointer">
              <div className="bg-white w-4 h-0.5 md:w-6 md:h-1"></div>
              <div className="bg-white w-4 h-0.5 md:w-6 md:h-1"></div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
