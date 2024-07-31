import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { caretakersState } from '../atoms/caretakersState';

const SearchPage = () => {
  const caretakers = useRecoilValue(caretakersState);
  const [query, setQuery] = useState('');
  const [filterTime, setFilterTime] = useState('');
  const [filterPrice, setFilterPrice] = useState('');

  // Helper function to check if a caretaker is available at a specific time
  const isAvailableAtTime = (caretaker, time) => {
    if (!time) return true;
    const dayTimes = caretaker.schedule.map(schedule => schedule.time.toLowerCase());
    return dayTimes.some(dayTime => dayTime.includes(time));
  };

  // Filter caretakers based on search query, time, and price
  const filteredCaretakers = caretakers
    .filter((caretaker) =>
      caretaker.name.toLowerCase().includes(query.toLowerCase())
    )
    .filter((caretaker) => isAvailableAtTime(caretaker, filterTime))
    .filter((caretaker) =>
      filterPrice ? caretaker.pricing <= filterPrice : true
    );

  return (
    <div className="flex-1 bg-white rounded-lg shadow-lg p-8 m-4 max-w-full lg:max-w-4xl mx-auto my-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Search for Care Takers</h2>

      {/* Search Input */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by name"
        className="border border-gray-300 rounded-lg p-3 w-full mb-6 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
      />

      {/* Filters */}
      <div className="flex flex-col space-y-4 mb-6">
        <div className="flex flex-col lg:flex-row lg:space-x-4">
          {/* Time Filter */}
          <select
            value={filterTime}
            onChange={(e) => setFilterTime(e.target.value)}
            className="border border-gray-300 rounded-lg p-3 w-full lg:w-1/3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          >
            <option value="">Filter by Time</option>
            <option value="9 am">Morning</option>
            <option value="12 pm">Afternoon</option>
            <option value="5 pm">Evening</option>
          </select>

          {/* Price Filter */}
          <input
            type="number"
            value={filterPrice}
            onChange={(e) => setFilterPrice(e.target.value)}
            placeholder="Max Price"
            className="border border-gray-300 rounded-lg p-3 w-full lg:w-1/3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          />
        </div>
      </div>

      {/* Caretaker List */}
      <ul className="space-y-4">
        {filteredCaretakers.length > 0 ? (
          filteredCaretakers.map((caretaker) => (
            <li
              key={caretaker.id}
              className="cursor-pointer border border-gray-300 rounded-lg p-4 bg-white shadow-md flex items-center space-x-4 transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              {caretaker.profileImage ? (
                <img
                  src={caretaker.profileImage}
                  alt={caretaker.name}
                  className="w-16 h-16 object-cover rounded-full"
                />
              ) : (
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full flex items-center justify-center text-white text-lg font-bold">
                  {caretaker.name[0]}
                </div>
              )}
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{caretaker.name}</h3>
                <p className="text-gray-600">Skills: {caretaker.skills.join(', ')}</p>
                <p className="text-gray-600">Location: {caretaker.location}</p>
                <p className="text-gray-600">Available Time: {caretaker.schedule.map(schedule => schedule.time).join(', ')}</p>
                <p className="text-gray-600">Price: ${caretaker.pricing}/hour</p>
              </div>
            </li>
          ))
        ) : (
          <li className="text-gray-600 text-center p-4">No caretakers found.</li>
        )}
      </ul>
    </div>
  );
};

export default SearchPage;
