import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 w-full z-10 bg-white md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          {/* Brand */}
          <Link
                  className="text-blue-700 text-sm sm:hidden inline-block font-semibold m-4"
                  to="/admin/dashboard"
                >
                  Dashboard
                </Link>
          
          <a
            className="text-blue-700 text-sm sm:hidden inline-block font-semibold"
            onClick={(e) => e.preventDefault()}
          >
            Your Profile Complete ratio: <b>80%</b>
          </a>
          <div className="relative pt-1 fb-25 mt-4 ">
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-lightBlue-200">
            <div className="w-10/12 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green"></div>

            </div>
          </div>
          <a
            className="text-blue-700 text-sm uppercase hidden lg:inline-block font-semibold"
            href="#"
            onClick={(e) => e.preventDefault()}
          >
            <i className='fas text-blue-700 fa-question-circle mr-6'></i>
            <i className='fas fa-bell'></i>
          </a>
        </div>
      </nav>
      
      {/* End Navbar */}
    </>
  );
}
