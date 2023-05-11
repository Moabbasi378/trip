import React, { useState } from "react";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";

const sliderData = [
  {
    url: "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
];

const Carousel = () => {
  const [slide, setSlide] = useState(0);
  const length = sliderData.length;

  const prevSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1);
  };

  const nextSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <BsArrowLeftSquareFill
        onClick={prevSlide}
        className="absolute top-1/2 left-4 text-white text-4xl cursor-pointer z-10 hover:scale-125 transition-transform duration-300 ease-in-out"
      />
      <BsArrowRightSquareFill
        onClick={nextSlide}
        className="absolute top-1/2 right-4 text-white text-4xl cursor-pointer z-10 hover:scale-125 transition-transform duration-300 ease-in-out"
      />
      <div className="absolute top-0 bottom-0 left-0 right-0">
        {sliderData.map((item, index) => (
          <div
            key={index}
            className={`${
              index === slide ? "opacity-100" : "opacity-0"
            } absolute top-0 left-0 right-0 bottom-0 z-0 transition-opacity duration-500 ease-in-out`}
          >
            <img
              src={item.url}
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-10 px-4 py-2 text-white text-sm text-center bg-gray-800 bg-opacity-50">
        {sliderData.map((_, index) => (
          <span
            key={index}
            className={`inline-block mx-1 w-2 h-2 rounded-full cursor-pointer ${
              index === slide ? "bg-white" : "bg-gray-500 hover:bg-white"
            }`}
            onClick={() => setSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
