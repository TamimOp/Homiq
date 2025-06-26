"use client";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#5271FF] text-white px-4 sm:px-6 py-16">
      <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16">
        {/* Left Section - Logo & Description */}
        <div className="lg:w-1/3 lg:max-w-[300px] flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <Image
              src="/assets/homeLogo.svg"
              alt="Homiq Logo"
              width={38}
              height={44}
              className="brightness-0 invert"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <span className="text-[43px] font-semibold text-white">omiq</span>
          </div>
          <p className="text-sm leading-6 text-white/90">
            Secure. Fast. Transparent. Join the next-gen trading experience.
          </p>
        </div>

        {/* Right Section - All Columns */}
        <div className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6">
          {/* Home Column */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold mb-3 text-base">Home</h4>
            <Link
              href="#"
              className="text-sm text-white/90 hover:text-white transition whitespace-nowrap"
            >
              Hero Section
            </Link>
            <Link
              href="#"
              className="text-sm text-white/90 hover:text-white transition whitespace-nowrap"
            >
              Features
            </Link>
            <Link
              href="#"
              className="text-sm text-white/90 hover:text-white transition whitespace-nowrap"
            >
              Properties
            </Link>
            <Link
              href="#"
              className="text-sm text-white/90 hover:text-white transition whitespace-nowrap"
            >
              Testimonials
            </Link>
            <Link
              href="#"
              className="text-sm text-white/90 hover:text-white transition whitespace-nowrap"
            >
              FAQ&apos;s
            </Link>
          </div>

          {/* About Us Column */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold mb-3 text-base">About Us</h4>
            <Link
              href="#"
              className="text-sm text-white/90 hover:text-white transition whitespace-nowrap"
            >
              Our Story
            </Link>
            <Link
              href="#"
              className="text-sm text-white/90 hover:text-white transition whitespace-nowrap"
            >
              Our Works
            </Link>
            <Link
              href="#"
              className="text-sm text-white/90 hover:text-white transition whitespace-nowrap"
            >
              How It Works
            </Link>
            <Link
              href="#"
              className="text-sm text-white/90 hover:text-white transition whitespace-nowrap"
            >
              Our Team
            </Link>
            <Link
              href="#"
              className="text-sm text-white/90 hover:text-white transition whitespace-nowrap"
            >
              Our Clients
            </Link>
          </div>

          {/* Properties Column */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold mb-3 text-base">Properties</h4>
            <Link
              href="#"
              className="text-sm text-white/90 hover:text-white transition whitespace-nowrap"
            >
              Portfolio
            </Link>
            <Link
              href="#"
              className="text-sm text-white/90 hover:text-white transition whitespace-nowrap"
            >
              Categories
            </Link>
          </div>

          {/* Services Column */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold mb-3 text-base">Services</h4>
            <Link
              href="#"
              className="text-sm text-white/90 hover:text-white transition whitespace-nowrap"
            >
              Valuation Mastery
            </Link>
            <Link
              href="#"
              className="text-sm text-white/90 hover:text-white transition"
            >
              Strategic Marketing
            </Link>
            <Link
              href="#"
              className="text-sm text-white/90 hover:text-white transition"
            >
              Negotiation Wizardry
            </Link>
            <Link
              href="#"
              className="text-sm text-white/90 hover:text-white transition whitespace-nowrap"
            >
              Closing Success
            </Link>
            <Link
              href="#"
              className="text-sm text-white/90 hover:text-white transition"
            >
              Property Management
            </Link>
          </div>

          {/* Contact Us Column */}
          <div className="flex flex-col gap-4 lg:justify-self-end">
            <h4 className="font-semibold mb-3 text-base">Contact Us</h4>
            <Link
              href="#"
              className="text-sm text-white/90 hover:text-white transition whitespace-nowrap"
            >
              Contact Form
            </Link>
            <Link
              href="#"
              className="text-sm text-white/90 hover:text-white transition whitespace-nowrap"
            >
              Our Offices
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
