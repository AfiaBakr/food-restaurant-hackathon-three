'use client';

import Link from "next/link";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoBagHandle } from "react-icons/io5";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuItems = [
    { name: "Home", href: "/", active: true },
    { name: "Menu", href: "/menu"},
    { name: "Blog", href: "/blog" },
    { name: "Pages", href: "/pages" },
    { name: "About", href: "/about" },
    { name: "Shop", href: "/shop" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <nav className="bg-black text-white p-4 w-full overflow-hidden">
      <section className="flex items-center justify-between px-4 md:px-[135px]">
        {/* Logo */}
        <Link href="/" className="md:hidden block text-2xl font-bold">
          <span className="text-orange-500">Food</span>tuck
        </Link>

        {/* Hamburger Icon for Mobile */}
        <div
          className="text-orange-500 md:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX className="w-6 h-6" /> : <HiMenuAlt3 className="w-6 h-6" />}
        </div>

{/* Links */}
        <ul
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent md:flex items-center space-y-4 md:space-y-0 md:space-x-6 text-sm transition-all duration-300 ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          {menuItems.map((item):any => (
            <li
              key={item.name}
              className="hover:text-orange-500 cursor-pointer px-4 md:px-0">
               <Link href={item.href}
             className={`text-[16px] leading-6 ${
              item.active ? "text-[#FF9F0D] font-bold" : "text-white"
            } font-inter hover:text-[#FF9F0D] transition-colors`}
            onClick={() => setMenuOpen(false)}
          >
            {item.name}</Link>
            </li>
          ))}
        </ul>

        {/* Search Box and Cart Icon */}
        <div className="hidden md:flex items-center space-x-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="bg-black border border-[#FF9F0D] rounded-full px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-[#ff9f0d]"
            />
            <span className="absolute top-2.5 right-3">
              <CiSearch />
            </span>
          </div>
          <IoBagHandle className="w-[24px] h-[24px]" />
          <Link href={"/signin"}><AiOutlineUser className="w-[24px] h-[24px] hover:bg-[#ff9f0d]" /></Link>
        </div>
      </section>
    </nav>
  );
};