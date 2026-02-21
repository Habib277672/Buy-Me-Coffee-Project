import React from "react";
import { NavLink } from "react-router-dom";

export const CallToAction = () => {
  return (
    <section className="bg-[#f5f1ee] px-6 py-20 text-center sm:px-12">
      {/* Sub Heading */}
      <p className="mb-2 text-xs font-semibold tracking-widest text-neutral-500 uppercase">
        Start Your Journey
      </p>

      {/* Main Heading */}
      <h2 className="text-chaiBrown mb-4 text-3xl font-extrabold sm:text-5xl">
        Get Support
      </h2>

      {/* Mini Description */}
      <p className="mx-auto mb-4 max-w-2xl px-8 text-xs text-neutral-600 sm:mb-7 sm:px-0 sm:text-lg">
        Join thousands of creators using Ek Cup Chai to grow their audience,
        connect deeply, and get meaningful support.
      </p>

      {/* CTA Button */}
      <NavLink
        to="/signup"
        className="bg-chaiBrown inline-block rounded-full border-2 border-[#BB591C] px-6 py-3 text-lg font-bold text-white shadow-[7px_5px_56px_-20px_#BB591C] transition-transform duration-300 hover:scale-105 sm:px-12 sm:py-5 sm:text-xl"
      >
        Create Your Page Now
      </NavLink>
    </section>
  );
};
