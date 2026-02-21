import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 bg-[#fdfaf5] pt-10 pb-10 text-sm text-[#444]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:gap-10 sm:px-8">
        {/* Top Section */}
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          {/* Copyright Text */}
          <div>&copy; {new Date().getFullYear()} Ek Chup Chai</div>

          {/* Navigation Links */}
          <div className="flex w-[90%] items-center justify-between gap-2 text-xs text-neutral-900 sm:w-[55%] sm:text-sm">
            <NavLink
              to="#"
              className="font-semibold transition-opacity duration-300 hover:opacity-70"
            >
              About
            </NavLink>

            <NavLink
              to="#"
              className="font-semibold transition-opacity duration-300 hover:opacity-70"
            >
              Help Center
            </NavLink>

            <NavLink
              to="#"
              className="font-semibold transition-opacity duration-300 hover:opacity-70"
            >
              Apps
            </NavLink>

            <NavLink
              to="#"
              className="font-semibold transition-opacity duration-300 hover:opacity-70"
            >
              Resources
            </NavLink>

            <NavLink
              to="#"
              className="font-semibold transition-opacity duration-300 hover:opacity-70"
            >
              Privacy
            </NavLink>

            <NavLink
              to="#"
              className="font-semibold transition-opacity duration-300 hover:opacity-70"
            >
              Terms
            </NavLink>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-5">
            <NavLink
              to="#"
              className="transition duration-300 hover:text-sky-600"
            >
              <FaFacebook className="text-xl" />
            </NavLink>

            <NavLink
              to="#"
              className="transition duration-300 hover:text-sky-400"
            >
              <FaTwitter className="text-xl" />
            </NavLink>

            <NavLink
              to="#"
              className="transition duration-300 hover:text-sky-800"
            >
              <FaLinkedin className="text-xl" />
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};
