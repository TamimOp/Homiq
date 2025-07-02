"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { properties } from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Plus,
  Minus,
  X,
  CarFront,
} from "lucide-react";

const PAGE_SIZE = 6;

export default function BrowsePage() {
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);

  // Search filters state
  const [filters, setFilters] = useState({
    lookingFor: "",
    price: "",
    location: "",
    rooms: "",
  });

  // Additional state for SearchBar features
  const [guests, setGuests] = useState(1);
  const [activeFilters, setActiveFilters] = useState(["Parking"]);

  // Initialize filters from URL params
  useEffect(() => {
    const lookingFor = searchParams.get("lookingFor") || "";
    const price = searchParams.get("price") || "";
    const location = searchParams.get("location") || "";
    const rooms = searchParams.get("rooms") || "";

    setFilters({ lookingFor, price, location, rooms });
  }, [searchParams]);

  // Filter properties based on search criteria
  const filteredProperties = properties.filter((property) => {
    const matchesLookingFor =
      !filters.lookingFor ||
      property.title.toLowerCase().includes(filters.lookingFor.toLowerCase()) ||
      property.description
        .toLowerCase()
        .includes(filters.lookingFor.toLowerCase()) ||
      property.tags.some((tag) =>
        tag.toLowerCase().includes(filters.lookingFor.toLowerCase())
      );

    const matchesPrice =
      !filters.price ||
      property.price.toLowerCase().includes(filters.price.toLowerCase());

    const matchesLocation =
      !filters.location ||
      property.title.toLowerCase().includes(filters.location.toLowerCase()) ||
      property.description
        .toLowerCase()
        .includes(filters.location.toLowerCase());

    const matchesRooms =
      !filters.rooms ||
      property.tags.some((tag) =>
        tag.toLowerCase().includes(filters.rooms.toLowerCase())
      );

    return matchesLookingFor && matchesPrice && matchesLocation && matchesRooms;
  });

  const currentItems = filteredProperties.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  const totalPages = Math.ceil(filteredProperties.length / PAGE_SIZE);

  const handleFilterChange = (field: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
    setCurrentPage(1); // Reset to first page when filtering
  };

  const removeFilter = (filterToRemove: string) => {
    setActiveFilters((prev) => prev.filter((f) => f !== filterToRemove));
  };

  useEffect(() => {
    if (!window.google || !document.getElementById("google-map")) return;

    const map = new window.google.maps.Map(
      document.getElementById("google-map") as HTMLElement,
      {
        zoom: 15,
        center: {
          lat: filteredProperties[0]?.location[0] || properties[0].location[0],
          lng: filteredProperties[0]?.location[1] || properties[0].location[1],
        },
      }
    );

    // Only show markers for filtered properties
    filteredProperties.forEach((property) => {
      const [lat, lng] = property.location;
      new window.google.maps.Marker({
        position: { lat, lng },
        map,
        title: property.title,
      });
    });
  }, [filteredProperties]);

  return (
    <div className="w-full min-h-screen bg-[#f9fafe] px-6 py-4">
      {/* Top Centered Search Bar */}
      <div
        className="mb-6 mx-auto"
        style={{
          maxWidth: 700,
          width: "100%",
        }}
      >
        <div className="flex items-center bg-white rounded-2xl shadow-md px-6 py-4">
          <div className="flex items-center gap-10">
            {/* Location */}
            <div>
              <p className="text-xs text-gray-400">Location</p>
              <input
                type="text"
                value={filters.location}
                onChange={(e) => handleFilterChange("location", e.target.value)}
                placeholder="Enter location"
                className="text-base font-medium text-black bg-transparent outline-none border-none p-0 w-32"
              />
            </div>
            <div className="w-[1px] h-8 bg-gray-200" />
            {/* Looking For */}
            <div>
              <p className="text-xs text-gray-400">Looking For</p>
              <input
                type="text"
                value={filters.lookingFor}
                onChange={(e) =>
                  handleFilterChange("lookingFor", e.target.value)
                }
                placeholder="Property type"
                className="text-base font-medium text-black bg-transparent outline-none border-none p-0 w-32"
              />
            </div>
            <div className="w-[1px] h-8 bg-gray-200" />
            {/* Price */}
            <div>
              <p className="text-xs text-gray-400">Price</p>
              <input
                type="text"
                value={filters.price}
                onChange={(e) => handleFilterChange("price", e.target.value)}
                placeholder="Budget"
                className="text-base font-medium text-black bg-transparent outline-none border-none p-0 w-24"
              />
            </div>
            <div className="w-[1px] h-8 bg-gray-200" />
            {/* Rooms/Guests */}
            <div>
              <p className="text-xs text-gray-400">Rooms</p>
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
        </div>
        {/* Filters and Sort */}
        <div className="flex items-center justify-between mt-3">
          {/* Left: Filters */}
          <div className="flex items-center gap-4">
            <button className="bg-[#4262FF] text-white text-sm font-medium px-4 py-2 rounded-full flex items-center gap-1">
              More filters <ChevronDown size={14} />
            </button>

            {activeFilters.map((filter, idx) => (
              <div
                key={idx}
                className="flex items-center gap-1 px-3 py-1.5 border border-gray-300 rounded-full bg-white text-sm font-medium text-black"
              >
                <CarFront size={16} />
                {filter}
                <X
                  size={14}
                  className="cursor-pointer"
                  onClick={() => removeFilter(filter)}
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

      {/* Main Content - Left and Right */}
      <div className="flex w-full gap-6">
        {/* Left: Cards */}
        <div className="w-[60%]">
          {/* Results Summary */}
          <div className="flex items-center justify-between mb-6">
            <div className="text-gray-400 text-sm">
              {filteredProperties.length > 0
                ? `Found ${filteredProperties.length} properties`
                : "No properties found"}
            </div>
          </div>

          {/* Cards */}
          {currentItems.length > 0 ? (
            <div className="grid grid-cols-3 gap-5">
              {currentItems.map((property) => (
                <PropertyCard key={property.id} {...property} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">
                No properties match your search criteria.
              </p>
              <p className="text-sm text-gray-400 mt-2">
                Try adjusting your filters.
              </p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-6">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="disabled:opacity-50 bg-gray-200 p-2 rounded"
              >
                <ChevronLeft size={16} />
              </button>
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-8 h-8 text-sm rounded-full ${
                    i + 1 === currentPage
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                disabled={currentPage === totalPages}
                className="disabled:opacity-50 bg-gray-200 p-2 rounded"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          )}
        </div>

        {/* Right: Map */}
        <div className="w-[40%] h-[80vh] rounded-2xl shadow overflow-hidden">
          <div id="google-map" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}
