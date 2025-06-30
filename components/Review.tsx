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
    <section className="w-full px-20 py-18 bg-white">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-5xl font-bold max-w-xl">
          What Our Clients Say <br /> about us
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
              width={48}
              height={48}
              className="rounded-full border-2 border-white"
            />
          ))}
          <p className="ml-2 text-sm text-gray-500">
            More than <span className="font-semibold">500+</span>
            <br /> Client Reviews
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between pt-22 gap-6">
        <button
          onClick={prev}
          className="w-10 h-10 flex items-center justify-center bg-[#5271FF] text-white rounded-full"
        >
          <ArrowLeft size={20} />
        </button>

        {/* Main content split into left (image) and right (review) */}
        <div className="flex flex-1 flex-row items-center justify-center gap-16">
          {/* Left: Image */}
          <div className="flex-shrink-0">
            <Image
              src={current.image}
              alt={current.name}
              width={345}
              height={345}
              className="rounded-2xl object-cover"
            />
          </div>
          {/* Right: Review Content */}
          <div
            className="flex flex-col items-start rounded-2xl"
            style={{
              width: 673,
              height: 406,
              padding: "36px 38px",
              gap: 27,
              borderRadius: 16,
              background: "#F5F7FF",
            }}
          >
            <p className="text-2xl md:text-[32px] font-medium leading-relaxed text-[#242424] mb-6">
              {current.review}
            </p>
            <p className="text-2xl font-semibold text-black mb-1">
              {current.name}
            </p>
            <p className="text-base text-[#5271FF] font-medium">
              {current.role}
            </p>
          </div>
        </div>

        <button
          onClick={next}
          className="w-10 h-10 flex items-center justify-center bg-[#5271FF] text-white rounded-full"
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
}
