"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

type FooterLink = {
  href: string;
  label: string;
  noWrap?: boolean;
};

type FooterColumn = {
  title: string;
  links: FooterLink[];
  isLastColumn?: boolean;
};

const columnVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeInOut" },
  }),
};

const Footer = () => {
  // Footer navigation data
  const footerColumns: FooterColumn[] = [
    {
      title: "Home",
      links: [
        { href: "#", label: "Hero Section" },
        { href: "#", label: "Features" },
        { href: "#", label: "Properties" },
        { href: "#", label: "Testimonials" },
        { href: "#", label: "FAQ's" },
      ],
    },
    {
      title: "About Us",
      links: [
        { href: "#", label: "Our Story" },
        { href: "#", label: "Our Works" },
        { href: "#", label: "How It Works" },
        { href: "#", label: "Our Team" },
        { href: "#", label: "Our Clients" },
      ],
    },
    {
      title: "Properties",
      links: [
        { href: "#", label: "Portfolio" },
        { href: "#", label: "Categories" },
      ],
    },
    {
      title: "Services",
      links: [
        { href: "#", label: "Valuation Mastery", noWrap: true },
        { href: "#", label: "Strategic Marketing" },
        { href: "#", label: "Negotiation Wizardry" },
        { href: "#", label: "Closing Success", noWrap: true },
        { href: "#", label: "Property Management" },
      ],
    },
    {
      title: "Contact Us",
      links: [
        { href: "#", label: "Contact Form" },
        { href: "#", label: "Our Offices" },
      ],
      isLastColumn: true,
    },
  ];

  return (
    <footer className="bg-[#5271FF] text-white px-4 sm:px-6 py-16">
      <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16">
        {/* Left Section - Logo & Description */}
        <div className="lg:w-1/3 lg:max-w-[300px] flex flex-col gap-6">
          <div className="flex items-center gap-0">
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
          {footerColumns.map((column, i) => (
            <motion.div
              key={column.title}
              className={`flex flex-col gap-4 ${
                column.isLastColumn ? "lg:justify-self-end" : ""
              }`}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={columnVariants}
            >
              <h4 className="font-semibold mb-3 text-base">{column.title}</h4>
              {column.links.map((link, linkIndex) => (
                <Link
                  key={linkIndex}
                  href={link.href}
                  className={`text-sm text-white/90 hover:text-white transition ${
                    link.noWrap ? "whitespace-nowrap" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
