"use client";

import { Suspense, useEffect, useState } from "react";
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
  AirVent,
  Tv,
  ChefHat,
  Wifi,
} from "lucide-react";
import Image from "next/image";

const PAGE_SIZE = 6;

function BrowsePageContent() {
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);

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

  // Filter dropdown state
  const [selectedRole, setSelectedRole] = useState("rent");
  const [priceRange, setPriceRange] = useState([0, 300]); // Start from 0
  const [amenities, setAmenities] = useState(["Parking"]);

  // Check for mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
    setAmenities((prev) => prev.filter((f) => f !== filterToRemove));
  };

  const toggleAmenity = (amenity: string) => {
    setAmenities((prev) => {
      const newAmenities = prev.includes(amenity)
        ? prev.filter((a) => a !== amenity)
        : [...prev, amenity];

      // Update active filters
      setActiveFilters(newAmenities);
      return newAmenities;
    });
  };

  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case "parking":
        return <CarFront size={16} />;
      case "air condition":
        return <AirVent size={16} />;
      case "tv":
        return <Tv size={16} />;
      case "kitchen":
        return <ChefHat size={16} />;
      case "wifi":
        return <Wifi size={16} />;
      default:
        return <CarFront size={16} />;
    }
  };

  // Handle dual range slider
  const handleMinPriceChange = (value: number) => {
    const newValue = Math.min(value, priceRange[1]);
    setPriceRange([newValue, priceRange[1]]);
  };

  const handleMaxPriceChange = (value: number) => {
    const newValue = Math.max(value, priceRange[0]);
    setPriceRange([priceRange[0], newValue]);
  };

  return (
    <div className="w-full min-h-screen bg-[#f9fafe] px-3 sm:px-6 py-4">
      {/* Custom CSS for range sliders */}
      <style jsx global>{`
        .dual-range-slider {
          position: relative;
          width: 100%;
          height: 6px;
          background: #e5e7eb;
          border-radius: 3px;
          margin: 15px 0;
        }

        .dual-range-slider .slider-track {
          position: absolute;
          height: 6px;
          background: #4c68eb;
          border-radius: 3px;
          box-shadow: 0px 0px 9.8px 0px #5271ff;
        }

        .dual-range-slider input[type="range"] {
          position: absolute;
          width: 100%;
          height: 6px;
          background: transparent;
          appearance: none;
          pointer-events: none;
          top: 0;
          left: 0;
        }

        .dual-range-slider input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          pointer-events: all;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #4c68eb;
          box-shadow: 0px 0px 9.8px 0px #5271ff;
          cursor: pointer;
          border: none;
          position: relative;
          z-index: 3;
        }

        .dual-range-slider input[type="range"]::-moz-range-thumb {
          pointer-events: all;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #4c68eb;
          box-shadow: 0px 0px 9.8px 0px #5271ff;
          cursor: pointer;
          border: none;
        }

        .dual-range-slider input[type="range"]::-webkit-slider-track {
          background: transparent;
        }

        .dual-range-slider input[type="range"]::-moz-range-track {
          background: transparent;
        }
      `}</style>

      {/* Top Centered Search Bar */}
      <div className="mb-6 mx-auto max-w-4xl w-full">
        <div className="bg-white rounded-2xl shadow-md p-4 sm:px-6 sm:py-4">
          {/* Mobile/Tablet Search Bar */}
          {isMobile ? (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-400 mb-1">Location</p>
                  <input
                    type="text"
                    value={filters.location}
                    onChange={(e) =>
                      handleFilterChange("location", e.target.value)
                    }
                    placeholder="Enter location"
                    className="text-sm font-medium text-black bg-transparent outline-none border border-gray-200 rounded-lg p-2 w-full"
                  />
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Looking For</p>
                  <input
                    type="text"
                    value={filters.lookingFor}
                    onChange={(e) =>
                      handleFilterChange("lookingFor", e.target.value)
                    }
                    placeholder="Property type"
                    className="text-sm font-medium text-black bg-transparent outline-none border border-gray-200 rounded-lg p-2 w-full"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-400 mb-1">Price</p>
                  <input
                    type="text"
                    value={filters.price}
                    onChange={(e) =>
                      handleFilterChange("price", e.target.value)
                    }
                    placeholder="Budget"
                    className="text-sm font-medium text-black bg-transparent outline-none border border-gray-200 rounded-lg p-2 w-full"
                  />
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Rooms</p>
                  <div className="flex items-center justify-center gap-3 text-black border border-gray-200 rounded-lg p-2">
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
              <button
                className="w-full text-sm font-semibold py-3 px-4 rounded-lg"
                style={{
                  border: "3px solid rgba(82, 113, 255, 0.48)",
                  background: "#EFF2FF",
                  color: "#4262FF",
                }}
              >
                Browse Properties
              </button>
            </div>
          ) : (
            /* Desktop Search Bar */
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4 lg:gap-6">
                <div className="flex-shrink-0">
                  <p className="text-xs text-gray-400">Location</p>
                  <input
                    type="text"
                    value={filters.location}
                    onChange={(e) =>
                      handleFilterChange("location", e.target.value)
                    }
                    placeholder="Enter location"
                    className="text-base font-medium text-black bg-transparent outline-none border-none p-0 w-24 lg:w-28"
                  />
                </div>
                <div className="w-[1px] h-8 bg-gray-200 flex-shrink-0" />
                <div className="flex-shrink-0">
                  <p className="text-xs text-gray-400">Looking For</p>
                  <input
                    type="text"
                    value={filters.lookingFor}
                    onChange={(e) =>
                      handleFilterChange("lookingFor", e.target.value)
                    }
                    placeholder="Property type"
                    className="text-base font-medium text-black bg-transparent outline-none border-none p-0 w-24 lg:w-28"
                  />
                </div>
                <div className="w-[1px] h-8 bg-gray-200 flex-shrink-0" />
                <div className="flex-shrink-0">
                  <p className="text-xs text-gray-400">Price</p>
                  <input
                    type="text"
                    value={filters.price}
                    onChange={(e) =>
                      handleFilterChange("price", e.target.value)
                    }
                    placeholder="Budget"
                    className="text-base font-medium text-black bg-transparent outline-none border-none p-0 w-16 lg:w-20"
                  />
                </div>
                <div className="w-[1px] h-8 bg-gray-200 flex-shrink-0" />
                <div className="flex-shrink-0">
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
              <div className="flex items-center flex-shrink-0">
                <button
                  className="text-sm font-semibold px-3 lg:px-4 py-2 whitespace-nowrap flex items-center justify-center"
                  style={{
                    borderRadius: "7px",
                    border: "3px solid rgba(82, 113, 255, 0.48)",
                    background: "#EFF2FF",
                    color: "#4262FF",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0px)";
                  }}
                >
                  Browse Properties
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Filters and Sort */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-3 gap-3 relative">
          <div className="flex items-center gap-4 overflow-x-auto w-full sm:w-auto">
            <button
              className="bg-[#4262FF] text-white text-sm font-medium px-4 py-2 rounded-full flex items-center gap-1 flex-shrink-0"
              onClick={() => setShowFilterDropdown(!showFilterDropdown)}
            >
              More filters <ChevronDown size={14} />
            </button>

            {/* Filter Dropdown */}
            {showFilterDropdown && (
              <div className="absolute top-12 left-0 bg-white rounded-2xl shadow-lg p-6 w-80 z-10 border">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-black">Filter</h3>
                    <X
                      size={20}
                      className="cursor-pointer text-gray-500"
                      onClick={() => setShowFilterDropdown(false)}
                    />
                  </div>

                  {/* Role Selection */}
                  <div>
                    <h4 className="text-sm font-medium text-black mb-3">
                      Choose your role
                    </h4>
                    <div className="flex gap-1 bg-[#FFFFFF] border border-[#E0E0E0] p-1 rounded-full">
                      {["Rent", "Buy", "Sell"].map((role) => (
                        <button
                          key={role}
                          onClick={() => setSelectedRole(role.toLowerCase())}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex-1 ${
                            selectedRole === role.toLowerCase()
                              ? "bg-[#4C68EB08] text-[#5271FF] shadow-sm"
                              : "bg-transparent text-gray-600 hover:text-gray-800"
                          }`}
                          style={
                            selectedRole === role.toLowerCase()
                              ? { border: "1px solid #5271FF" }
                              : {}
                          }
                        >
                          {role}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div>
                    <h4 className="text-sm font-medium text-black mb-3">
                      Price Range
                    </h4>
                    <div className="space-y-4">
                      {/* Custom Dual Range Slider */}
                      <div className="dual-range-slider">
                        <div
                          className="slider-track"
                          style={{
                            left: `${(priceRange[0] / 300) * 100}%`,
                            right: `${100 - (priceRange[1] / 300) * 100}%`,
                          }}
                        />
                        <input
                          type="range"
                          min="0"
                          max="300"
                          value={priceRange[0]}
                          onChange={(e) =>
                            handleMinPriceChange(Number(e.target.value))
                          }
                        />
                        <input
                          type="range"
                          min="0"
                          max="300"
                          value={priceRange[1]}
                          onChange={(e) =>
                            handleMaxPriceChange(Number(e.target.value))
                          }
                        />
                      </div>

                      {/* Price Display */}
                      <div className="flex justify-between text-xs text-gray-500 mt-4">
                        <span>$0</span>
                        <div className="flex gap-2">
                          <span className="font-medium text-black">
                            ${priceRange[0]} - ${priceRange[1]}
                          </span>
                        </div>
                        <span>$300</span>
                      </div>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div>
                    <h4 className="text-sm font-medium text-black mb-3">
                      Amenities
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        "Parking",
                        "Air Condition",
                        "TV",
                        "Kitchen",
                        "WiFi",
                      ].map((amenity) => (
                        <label
                          key={amenity}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={amenities.includes(amenity)}
                            onChange={() => toggleAmenity(amenity)}
                            className="w-4 h-4 text-[#4262FF] bg-gray-100 border-gray-300 rounded focus:ring-[#4262FF] focus:ring-2"
                          />
                          <span className="text-sm text-gray-700">
                            {amenity}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Apply Button */}
                  <button
                    className="w-full bg-[#4262FF] text-white text-sm font-medium py-3 rounded-lg hover:bg-[#3651e6] transition-colors"
                    onClick={() => setShowFilterDropdown(false)}
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            )}

            {activeFilters.map((filter, idx) => (
              <div
                key={idx}
                className="flex items-center gap-1 px-3 py-1.5 border border-gray-300 rounded-full bg-white text-sm font-medium text-black flex-shrink-0"
              >
                {getAmenityIcon(filter)}
                {filter}
                <X
                  size={14}
                  className="cursor-pointer"
                  onClick={() => removeFilter(filter)}
                />
              </div>
            ))}
          </div>

          <div className="text-sm text-black flex-shrink-0">
            Sort by:{" "}
            <span className="text-[#4262FF] font-medium cursor-pointer">
              Availability
            </span>{" "}
            <ChevronDown size={14} className="inline-block ml-1" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row w-full gap-6">
        {/* Left: Cards */}
        <div className="w-full lg:w-[60%]">
          {/* Results Summary */}
          <div className="flex items-center justify-between mb-6">
            <div className="text-gray-400 text-sm">
              {filteredProperties.length > 0
                ? `Found ${filteredProperties.length} properties`
                : "No properties found"}
            </div>
          </div>

          {/* Cards Grid - Responsive */}
          {currentItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {currentItems.map((property) => (
                <PropertyCard
                  key={property.id}
                  {...property}
                  id={property.id.toString()}
                />
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
            <div className="flex justify-center lg:justify-start items-center gap-2 mt-6">
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
                      ? "bg-[#5271FF] text-white"
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
        <div className="w-full lg:w-[40%]">
          <div
            className="rounded-2xl shadow overflow-hidden flex items-center justify-center"
            style={{
              width: "100%",
              height: "854px",
              flexShrink: 0,
              position: "relative",
            }}
          >
            <Image
              src="/assets/map2.png"
              alt="Map"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BrowsePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowsePageContent />
    </Suspense>
  );
}
