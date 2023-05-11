import React from "react";
import { RiCustomerService2Full, RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";

const Search = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            LUXURY INCLUDED VACATIONS FOR TWO PEOPLE
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Come experience the very pinnacle of luxury Caribbean all-inclusive
            vacations for couples at BEACHES Resorts. Our luxury beach resorts,
            set along the most gorgeous tropical settings and exquisite beaches
            in Saint Lucia, Jamaica, Antigua, The Bahamas, Grenada, Barbados and
            Curaçao, feature unlimited gourmet dining, unique bars serving
            premium liquors and wines, and every land and water sport, including
            complimentary green fees at our golf resorts and certified scuba
            diving at most resorts. If you are planning a wedding, BEACHES is
            the leader in Caribbean destination weddings and honeymoon packages.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center justify-center text-center bg-gray-100 rounded-lg p-8">
            <button className="p-2 bg-blue-500 rounded-full text-white">
              <RiCustomerService2Fill size={50} />
            </button>
            <div className="ml-4">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                LEADING SERVICE
              </h3>
              <p className="text-gray-600">
                ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center text-center bg-gray-100 rounded-lg p-8">
            <button className="p-2 bg-blue-500 rounded-full text-white">
              <MdOutlineTravelExplore size={50} />
            </button>
            <div className="ml-4">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                LEADING SERVICE
              </h3>
              <p className="text-gray-600">
                ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="border rounded-lg text-center p-8">
          <p className="text-lg text-gray-800 font-bold mb-2">
            GET AN ADDITIONAL 10% OFF
          </p>
          <p className="text-lg text-gray-800 font-bold mb-4">12 HOURS LEFT</p>
          <button className="bg-blue-500 text-white rounded-lg py-2 px-4">
            BOOK NOW AND SAVE
          </button>
        </div>
        <form className="w-full mt-8">
          <div className="flex flex-col mb-4">
            <label className="text-gray-600 font-bold mb-2">Destination</label>
            <input
              className="border rounded-lg py-2 px-3 text-gray-600"
              type="text"
              placeholder="Enter destination"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-gray-600 font-bold mb-2">
              Check-In Date
            </label>
            <input
              className="border rounded-lg py-2 px-3 text-gray-600"
              type="date"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-gray-600 font-bold mb-2">
              Check-Out Date
            </label>
            <input
              className="border rounded-lg py-2 px-3 text-gray-600"
              type="date"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-gray-600 font-bold mb-2">
              Number of Guests
            </label>
            <input
              className="border rounded-lg py-2 px-3 text-gray-600"
              type="number"
              min="1"
            />
          </div>
          <button className="bg-blue-500 text-white rounded-lg py-2 px-4 mt-4">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
