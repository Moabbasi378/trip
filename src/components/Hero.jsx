import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import beachVid from "../assets/beachVid.mp4";

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      <video
        className="w-full h-full object-cover"
        src={beachVid}
        autoPlay
        loop
        muted
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-900 to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold tracking-wide">
          First Class Travel
        </h1>
        <h2 className="text-2xl md:text-3xl py-4 font-semibold">
          Top 1% Locations Worldwide
        </h2>
        <form className="max-w-[700px] mx-auto w-full border rounded-md p-1 bg-gray-100/90">
          <div className="flex items-center justify-center">
            <input
              className="bg-transparent w-full sm:w-[400px] md:w-[500px] text-lg font-bold
                focus:outline-none py-2 px-4 rounded-md"
              type="text"
              placeholder="Search Destinations"
            />
            <button className="p-2 transition-all duration-200 rounded-full hover:bg-gray-700">
              <AiOutlineSearch
                size={20}
                className="icon"
                style={{ color: "#ffffff" }}
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
