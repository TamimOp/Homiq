"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const reviews = [
  {
    name: "Wade Warren",
    role: "Product and Seals Manager",
    image: "/assets/dp1.jpg",
    review:
      "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
  },
  {
    name: "Marvin McKinney",
    role: "Marketing Lead",
    image: "/assets/dp2.jpg",
    review:
      "Working with Estatein was an absolute pleasure. Their intuitive interface and attentive staff made the process seamless.",
  },
  {
    name: "Jacob Jones",
    role: "UX Designer",
    image: "/assets/dp3.jpg",
    review:
      "I found the perfect place within days! Estatein's filtering tools are incredibly powerful and easy to use.",
  },
  {
    name: "Darlene Robertson",
    role: "Freelancer",
    image: "/assets/dp4.jpg",
    review:
      "Great experience from start to finish. The team was responsive, and listings were updated in real time.",
  },
];

export default function Review() {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const next = () => {
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const current = reviews[index];

  return (
    <section className="w-full px-4 md:px-10 lg:px-20 py-10 md:py-16 lg:py-18 bg-white">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-10 gap-6">
        <h2 className="text-3xl md:text-5xl font-bold max-w-xl">
          What Our Clients Say <br className="hidden md:block" /> about us
        </h2>
        <div className="flex items-center">
          {[
            "/assets/dp1.jpg",
            "/assets/dp2.jpg",
            "/assets/dp3.jpg",
            "/assets/dp4.jpg",
          ].map((src, i) => (
            <Image
              key={i}
              src={src}
              alt={`Reviewer ${i + 1}`}
              width={40}
              height={40}
              className="rounded-full border-2 border-white md:w-12 md:h-12"
            />
          ))}
          <p className="ml-2 text-xs md:text-sm text-gray-500">
            More than <span className="font-semibold">500+</span>
            <br className="hidden md:block" /> Client Reviews
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between pt-10 md:pt-16 lg:pt-22 gap-6">
        <button
          onClick={prev}
          className="w-10 h-10 flex items-center justify-center bg-[#5271FF] text-white rounded-full mb-4 lg:mb-0"
        >
          <ArrowLeft size={20} />
        </button>

        {/* Main content split into left (image) and right (review) */}
        <div className="flex flex-col md:flex-row flex-1 items-center justify-center gap-8 md:gap-16">
          {/* Left: Image */}
          <div className="flex-shrink-0">
            <Image
              src={current.image}
              alt={current.name}
              width={180}
              height={180}
              className="rounded-2xl object-cover w-36 h-36 md:w-[220px] md:h-[220px] lg:w-[345px] lg:h-[345px]"
            />
          </div>
          {/* Right: Review Content */}
          <div
            className="flex flex-col items-start rounded-2xl w-full md:w-[350px] lg:w-[673px]"
            style={{
              padding: "24px 18px",
              gap: 18,
              borderRadius: 16,
              background: "#F5F7FF",
            }}
          >
            <p className="text-lg md:text-2xl lg:text-[32px] font-medium leading-relaxed text-[#242424] mb-4 md:mb-6">
              {current.review}
            </p>
            <p className="text-lg md:text-2xl font-semibold text-black mb-1">
              {current.name}
            </p>
            <p className="text-base text-[#5271FF] font-medium">
              {current.role}
            </p>
          </div>
        </div>

        <button
          onClick={next}
          className="w-10 h-10 flex items-center justify-center bg-[#5271FF] text-white rounded-full mt-4 lg:mt-0"
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
}
