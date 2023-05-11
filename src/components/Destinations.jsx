import React from "react";

import BoraBora from "../assets/borabora.jpg";
import BoraBora2 from "../assets/borabora2.jpg";
import Maldives from "../assets/maldives.jpg";
import Maldives2 from "../assets/maldives2.jpg";
import KeyWest from "../assets/keywest.jpg";

const Destinations = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 text-center">
      <h1>All-Inclusive Resorts</h1>
      <p className="py-4">On the Caribbean's Best Beaches</p>
      <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
        <div className="relative rounded-lg overflow-hidden col-span-2 md:col-span-3 row-span-2">
          <img
            className="w-full h-full object-cover transform transition-all hover:scale-110"
            src={BoraBora}
            alt="Bora Bora"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-100">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Bora Bora</h3>
              <p className="text-sm">French Polynesia</p>
            </div>
          </div>
        </div>
        <div className="relative rounded-lg overflow-hidden">
          <img
            className="w-full h-full object-cover transform transition-all hover:scale-110"
            src={BoraBora2}
            alt="Bora Bora 2"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-100">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Bora Bora 2</h3>
              <p className="text-sm">French Polynesia</p>
            </div>
          </div>
        </div>
        <div className="relative rounded-lg overflow-hidden">
          <img
            className="w-full h-full object-cover transform transition-all hover:scale-110"
            src={Maldives}
            alt="Maldives"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-100">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Maldives</h3>
              <p className="text-sm">Indian Ocean</p>
            </div>
          </div>
        </div>
        <div className="relative rounded-lg overflow-hidden">
          <img
            className="w-full h-full object-cover transform transition-all hover:scale-110"
            src={Maldives2}
            alt="Maldives 2"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-100">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Maldives 2</h3>
              <p className="text-sm">Indian Ocean</p>
            </div>
          </div>
        </div>
        <div className="relative rounded-lg overflow-hidden">
          <img
            className="w-full h-full object-cover transform transition-all hover:scale-110"
            src={KeyWest}
            alt="Key West"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex justify-centeritems-center opacity-0 transition-opacity duration-300 hover:opacity-100">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Key West</h3>
              <p className="text-sm">Florida, USA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Destinations;
