"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        controls.start({
          scale: 0.97,
          boxShadow: "0 4px 24px rgba(79,111,244,0.10)",
          transition: { duration: 0.3 },
        });
      } else {
        controls.start({
          scale: 1,
          boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
          transition: { duration: 0.3 },
        });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full px-4 sm:px-6 py-3 pt-6 flex justify-center">
      <motion.div
        animate={controls}
        initial={{ scale: 1, boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}
        className="w-full max-w-[1240px] min-h-[70px] bg-white rounded-full flex flex-col lg:flex-row lg:items-center px-4 sm:px-6 shadow-sm relative"
        style={{ willChange: "transform, box-shadow" }}
      >
        {/* Mobile layout */}
        <div className="flex items-center justify-between h-[70px] w-full lg:hidden">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/homeLogo.svg"
              alt="Homiq Logo"
              width={30}
              height={35}
              className="sm:w-[37.639px] sm:h-[43.398px]"
            />
            <span className="text-[24px] sm:text-[32px] leading-[150%] font-semibold primary-gradient">
              Homiq
            </span>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="flex flex-col justify-center items-center w-8 h-8 space-y-1"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-black transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Desktop layout - Logo Left, Nav Center, Buttons Right */}
        <div className="hidden lg:flex items-center justify-between w-full h-[70px]">
          {/* Left - Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/homeLogo.svg"
              alt="Homiq Logo"
              width={37.639}
              height={43.398}
            />
            <span className="text-[38.26px] leading-[150%] font-semibold primary-gradient">
              Homiq
            </span>
          </Link>

          {/* Center - Nav Links */}
          <div className="flex items-center gap-6 xl:gap-8 text-[14px] xl:text-xl">
            <Link
              href="/"
              className="text-[#4f6ff4] font-medium hover:text-[#3d5ac2] transition"
            >
              Home
            </Link>
            <Link
              href="/properties"
              className="text-black hover:text-[#4f6ff4] transition"
            >
              All Property
            </Link>
            <Link
              href="/blog"
              className="text-black hover:text-[#4f6ff4] transition"
            >
              Blog
            </Link>
            <Link
              href="/whats-new"
              className="text-black hover:text-[#4f6ff4] transition"
            >
              What&apos;s New
            </Link>
          </div>

          {/* Right - Buttons */}
          <div className="flex items-center gap-3 xl:gap-4">
            <Link
              href="/login"
              className="text-black hover:text-[#4f6ff4] transition text-xl xl:text-[16px]"
            >
              Login
            </Link>
            <Link
              href="/getstarted"
              className="px-4 xl:px-6 py-2 border-2 border-[#4f6ff4] rounded-full text-[#4f6ff4] font-semibold hover:bg-[#4f6ff4] hover:text-white transition text-[14px] xl:text-xl whitespace-nowrap"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 pb-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col space-y-4">
            {/* Nav Links */}
            <div className="flex flex-col space-y-3 text-[16px] border-b border-gray-100 pb-4">
              <Link
                href="/"
                className="text-[#4f6ff4] font-medium hover:text-[#3d5ac2] transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/properties"
                className="text-black hover:text-[#4f6ff4] transition"
                onClick={() => setIsMenuOpen(false)}
              >
                All Property
              </Link>
              <Link
                href="/blog"
                className="text-black hover:text-[#4f6ff4] transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/whats-new"
                className="text-black hover:text-[#4f6ff4] transition"
                onClick={() => setIsMenuOpen(false)}
              >
                What&apos;s New
              </Link>
            </div>

            {/* Buttons */}
            <div className="flex flex-col space-y-3">
              <Link
                href="/login"
                className="text-black hover:text-[#4f6ff4] transition text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/getstarted"
                className="px-6 py-2 border-2 border-[#4f6ff4] rounded-full text-[#4f6ff4] font-semibold hover:bg-[#4f6ff4] hover:text-white transition text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
