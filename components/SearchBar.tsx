"use client";

import { useState } from "react";
import { ChevronDown, Plus, Minus, X, CarFront } from "lucide-react";

export default function SearchBar() {
  const [guests, setGuests] = useState(1);
  const [filters, setFilters] = useState(["Parking"]);

  return (
    <div className="w-full space-y-3">
      {/* Main search bar */}
      <div className="flex items-center justify-between bg-white rounded-2xl shadow-md px-6 py-4">
        <div className="flex items-center gap-10">
          {/* Location */}
          <div>
            <p className="text-xs text-gray-400">Location</p>
            <p className="text-base font-medium text-black">Barcelona, Spain</p>
          </div>

          <div className="w-[1px] h-8 bg-gray-200" />

          {/* Date */}
          <div>
            <p className="text-xs text-gray-400">When</p>
            <p className="text-base font-medium text-black">18, Jun 2025</p>
          </div>

          <div className="w-[1px] h-8 bg-gray-200" />

          {/* Guests */}
          <div>
            <p className="text-xs text-gray-400">Guests</p>
            <div className="flex items-center gap-3 text-black">
              <Plus
                size={16}
                className="cursor-pointer"
                onClick={() => setGuests((prev) => prev + 1)}
              />
              <span className="font-medium">{guests}</span>
              <Minus
                size={16}
                className="cursor-pointer"
                onClick={() => setGuests((prev) => Math.max(1, prev - 1))}
              />
            </div>
          </div>
        </div>

        {/* Button */}
        <button className="text-[#4262FF] font-semibold border border-[#cdd5ff] rounded-xl px-6 py-2 hover:bg-[#f0f3ff] transition">
          Browse Properties
        </button>
      </div>

      {/* Filters and Sort */}
      <div className="flex items-center justify-between">
        {/* Left: Filters */}
        <div className="flex items-center gap-4">
          <button className="bg-[#4262FF] text-white text-sm font-medium px-4 py-2 rounded-full flex items-center gap-1">
            More filters <ChevronDown size={14} />
          </button>

          {filters.map((filter, idx) => (
            <div
              key={idx}
              className="flex items-center gap-1 px-3 py-1.5 border border-gray-300 rounded-full bg-white text-sm font-medium text-black"
            >
              <CarFront size={16} />
              {filter}
              <X
                size={14}
                className="cursor-pointer"
                onClick={() =>
                  setFilters((prev) => prev.filter((f) => f !== filter))
                }
              />
            </div>
          ))}
        </div>

        {/* Right: Sort by */}
        <div className="text-sm text-black">
          Sort by:{" "}
          <span className="text-[#4262FF] font-medium cursor-pointer">
            Availability
          </span>{" "}
          <ChevronDown size={14} className="inline-block ml-1" />
        </div>
      </div>
    </div>
  );
}
