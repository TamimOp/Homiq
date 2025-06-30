"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, Variants } from "framer-motion";

const stats = [
  { value: "200+", label: "Happy Customers" },
  { value: "10k+", label: "Properties For Clients" },
  { value: "16+", label: "Years of Experience" },
];

// Helper to extract number and suffix
function splitValue(val: string) {
  const match = val.match(/^(\d+)([a-zA-Z\+\%]*)$/);
  if (!match) return { number: 0, suffix: "" };
  return { number: Number(match[1]), suffix: match[2] };
}

function useCountUp(target: number, inView: boolean, duration = 1200) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frame: number;
    if (!inView) {
      setCount(0);
      return;
    }
    const startTime = performance.now();

    function animate(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(progress * target);
      setCount(current);

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    }

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [inView, target, duration]);

  return count;
}

const statVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.7, ease: "easeOut" },
  }),
};

function StatItem({
  value,
  label,
  custom,
}: {
  value: string;
  label: string;
  custom: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const { number, suffix } = splitValue(value);
  const count = useCountUp(number, inView);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      custom={custom}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={statVariants}
    >
      <h3 className="text-white text-5xl font-semibold">
        {count}
        {suffix}
      </h3>
      <p className="text-gray-400 text-xl mt-2">{label}</p>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="w-full bg-black py-8 px-[153px]">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        {stats.map((stat, index) => (
          <StatItem
            key={index}
            value={stat.value}
            label={stat.label}
            custom={index}
          />
        ))}
      </div>
    </section>
  );
}
