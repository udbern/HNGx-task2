// Import necessary modules and components from external libraries
import React from "react"; 
import Logo from "../assets/Logo2.png";
import { NavLink, useLocation } from "react-router-dom"; 
import { Link } from "react-router-dom"; 
import { BiHome, BiLogIn } from "react-icons/bi"; 
import { PiTelevisionSimpleBold } from "react-icons/pi"; 
import { ImVideoCamera } from "react-icons/im"; 
import { SlCalender } from "react-icons/sl"; 

function MobileSidebar() {
    // Get the current location using the useLocation hook
    const location = useLocation();
    // Check if the current location is the home page
    const isActive = location.pathname === "";

    return (
        <>
            {/* Sidebar component */}
            <aside className="z-50">
                <div className=" mt-5 p-2 space-y-4">
                    <div className=" relative flex items-center justify-between w-full">
                        
                        <img className=" w-40 px-4" src={Logo} alt="logo.png" />
                    </div>
                    {/* Navigation links */}
                    <ul className=" flex flex-col justify-center items-center space-y-5">
                        {/* Home Link */}
                        <NavLink
                            to="/"
                            className={`flex items-center justify-center p-4 w-full gap-2 text-xl capitalize font-semibold ${isActive ? " text-white" : ""
                                }`}
                        >
                            <BiHome className="text-[#666]" />
                            home
                        </NavLink>

                        {/* Movies Link */}
                        <NavLink
                            to="/"
                            className={`flex items-center justify-center p-4 w-full gap-2 text-xl capitalize font-semibold ${isActive ? " text-white" : ""
                                }`}
                        >
                            <ImVideoCamera className="text-[#666]" />
                            movies
                        </NavLink>

                        {/* TV Series Link */}
                        <NavLink
                            to=""
                            className={`flex items-center justify-center p-4 w-full gap-2 text-xl capitalize font-semibold ${isActive ? " text-white" : "bg-[#be123c19] text-[#BE123C]"
                                }`}
                        >
                            <PiTelevisionSimpleBold className="text-[#666]" />
                            tv series
                        </NavLink>

                        {/* Upcoming Link */}
                        <NavLink
                            to=""
                            className={`flex items-center justify-center p-4 w-full gap-2 text-xl capitalize font-semibold ${isActive ? " text-white" : ""
                                }`}
                        >
                            <SlCalender className="text-[#666]" />
                            upcoming
                        </NavLink>
                    </ul>
                    <div className=" border mx-5 p-5  rounded-3xl bg-[#f8e7eb66]  space-y-2 ">
                        <p className=" font-semibold text-base text-[#333333cc]">
                            Play movie quizzes and earn free tickets
                        </p>
                        <p className=" text-xs font-semibold text-[#666]">
                            50k people are playing now
                        </p>
                        <div className="flex justify-center w-full ">
                            <button className=" rounded-3xl px-6 py-1 bg-[#BE123C33] text-[#BE123C]">
                                Start playing
                            </button>
                        </div>
                    </div>
                    {/* Login Link */}
                    <Link
                        className="flex items-center  gap-3 justify-center pt-2 pb-5 font-semibold text-xl text-[#666]"
                        to=""
                    >
                        <BiLogIn className="" />
                        BiLogIn
                    </Link>
                </div>
            </aside>
        </>
    );
}


export default MobileSidebar;
