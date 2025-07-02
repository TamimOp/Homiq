"use client";

import { useEffect, useState } from "react";
import { properties } from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PAGE_SIZE = 6;

export default function BrowsePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const currentItems = properties.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  useEffect(() => {
    if (!window.google || !document.getElementById("google-map")) return;

    const map = new window.google.maps.Map(
      document.getElementById("google-map") as HTMLElement,
      {
        zoom: 15,
        center: {
          lat: properties[0].location[0],
          lng: properties[0].location[1],
        },
      }
    );

    properties.forEach((property) => {
      const [lat, lng] = property.location;
      new window.google.maps.Marker({
        position: { lat, lng },
        map,
        title: property.title,
      });
    });
  }, []);

  const totalPages = Math.ceil(properties.length / PAGE_SIZE);

  return (
    <div className="flex w-full min-h-screen bg-[#f9fafe] px-6 py-4 gap-6">
      {/* Left: Filters + Cards */}
      <div className="w-[60%]">
        {/* Top Filters */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-gray-400 text-sm">
            Over 1,000 places in Bristol
          </div>
          <div className="text-sm text-gray-500">
            Sorted by <span className="text-[#4262FF]">nearest ▼</span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-3 gap-5">
          {currentItems.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>

        {/* Pagination */}
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
                i + 1 === currentPage ? "bg-blue-500 text-white" : "bg-gray-100"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="disabled:opacity-50 bg-gray-200 p-2 rounded"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Right: Map */}
      <div className="w-[40%] h-[80vh] rounded-2xl shadow overflow-hidden">
        <div id="google-map" className="w-full h-full" />
      </div>
    </div>
  );
}
