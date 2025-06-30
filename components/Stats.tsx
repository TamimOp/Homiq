import React from "react";

const stats = [
  { value: "200+", label: "Happy Customers" },
  { value: "10k+", label: "Properties For Clients" },
  { value: "16+", label: "Years of Experience" },
];

export default function Stats() {
  return (
    <section className="w-full bg-black py-8 px-[153px]">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <h3 className="text-white text-5xl font-semibold">{stat.value}</h3>
            <p className="text-gray-400 text-xl mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
