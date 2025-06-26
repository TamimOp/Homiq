import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full px-6 py-3 bg-[#f7f8ff] flex justify-center">
      <div className="w-full max-w-[1240px] h-[70px] bg-white rounded-full flex items-center justify-between px-6 shadow-sm">
        {/* Logo */}
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

        {/* Nav Links */}
        <div className="flex items-center gap-8 text-[16px]">
          <Link href="/" className="text-[#4f6ff4] font-medium">
            Home
          </Link>
          <Link href="/properties" className="text-black">
            All Property
          </Link>
          <Link href="/blog" className="text-black">
            Blog
          </Link>
          <Link href="/whats-new" className="text-black">
            What’s New
          </Link>
        </div>
        {/*Buttons */}
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-black">
            Login
          </Link>

          <Link
            href="/get-started"
            className="px-6 py-2 border-2 border-[#4f6ff4] rounded-full text-[#4f6ff4] font-semibold hover:bg-[#4f6ff4] hover:text-white transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
