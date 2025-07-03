"use client";

import { useParams } from "next/navigation";
import { properties } from "@/data/properties";
import Image from "next/image";
import { ArrowLeft, MapPin, Bed, Bath, Home } from "lucide-react";
import Link from "next/link";

export default function PropertyDetails() {
  const { id } = useParams();
  const property = properties.find((p) => p.id === parseInt(id as string));

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Property Not Found
          </h1>
          <Link
            href="/BrowsePage"
            className="text-blue-600 hover:underline mt-4 inline-block"
          >
            Back to Browse
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f9fafe]">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link
            href="/BrowsePage"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft size={20} />
            Back to Browse
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Component 1: Gallery */}
        <div className="mb-8">
          <div className="flex gap-4 h-96">
            {/* Left: Main Image */}
            <div className="flex-1 relative rounded-2xl overflow-hidden">
              <Image
                src="/assets/pic1.png"
                alt="Main property image"
                fill
                className="object-cover"
              />
            </div>

            {/* Right: Grid of 4 images */}
            <div className="w-96 grid grid-cols-2 gap-2">
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src="/assets/pic2.png"
                  alt="Property image 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src="/assets/pic3.jpg"
                  alt="Property image 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src="/assets/pic4.jpg"
                  alt="Property image 4"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src="/assets/pic5.jpg"
                  alt="Property image 5"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Component 2: Information Section */}
        <div className="bg-white rounded-2xl shadow-md p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                {property.title}
              </h1>
              <p className="text-xl font-semibold text-[#4262FF] mb-4">
                {property.price}
              </p>

              {/* Property Features */}
              <div className="flex items-center gap-6 mb-6">
                {property.tags.map((tag, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-gray-600"
                  >
                    {tag.includes("bedroom") && <Bed size={18} />}
                    {tag.includes("bathroom") && <Bath size={18} />}
                    {!tag.includes("bedroom") && !tag.includes("bathroom") && (
                      <Home size={18} />
                    )}
                    <span className="text-sm font-medium">{tag}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 text-gray-600 mb-6">
                <MapPin size={18} />
                <span>
                  Lat: {property.location[0]}, Lng: {property.location[1]}
                </span>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Description
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {property.description}
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Features
              </h3>
              <div className="flex flex-wrap gap-2">
                {property.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-[#EFF2FF] text-[#4262FF] text-sm font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Contact Button */}
              <button className="w-full mt-8 bg-[#4262FF] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#3651E6] transition-colors">
                Contact Agent
              </button>
            </div>
          </div>
        </div>

        {/* Component 3: Location */}
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Location</h2>
          <div className="relative w-full h-96 rounded-lg overflow-hidden">
            <Image
              src="/assets/map3.png"
              alt="Property location map"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
