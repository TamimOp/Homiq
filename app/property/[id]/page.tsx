"use client";

import { useParams } from "next/navigation";
import { properties } from "@/data/properties";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import BookingSection from "@/components/BookingSection";

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

      {/* Component 1: Gallery */}
      <div className="max-w-7xl mx-auto px-6 py-8">
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
      </div>

      {/* Component 2: Information Section */}
      <div className="max-w-7xl mx-auto px-6">
        <BookingSection />
      </div>

      {/* Component 3: Location */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="rounded-2xl">
          <h2 className="text-5xl text-center font-bold text-gray-800 mb-20">
            Location
          </h2>
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
