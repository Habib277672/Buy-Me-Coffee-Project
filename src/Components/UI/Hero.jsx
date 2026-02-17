import React from "react";
import { FaStar } from "react-icons/fa";
import logo from "../../assets/Images/logo.png";
import { NavLink } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#f5f1ee] px-4 pt-25 text-center sm:px-8">
      {/* Main Content */}
      <div className="relative z-50 mx-auto flex min-h-[calc(100vh-150px)] w-full max-w-3xl flex-col items-center justify-center px-2 sm:px-4">
        {/* Star Line */}
        <div className="text-chaiBrown mb-8 flex flex-wrap items-center justify-center gap-1 text-sm font-medium sm:mb-10">
          {Array(5)
            .fill(0)
            .map((_, i) => {
              return <FaStar key={i} />;
            })}
          <span className="ml-2">Loved by 1,000,000+ chai supporters</span>
        </div>

        {/* Main Heading */}
        <h1 className="mb-6 text-center text-5xl leading-tight font-extrabold text-black sm:text-7xl md:text-8xl">
          Create more. <br />
          <span className="logo-font text-chaiBrown">Chai more.</span>
        </h1>

        {/* Sub Heading */}
        <p className="mb-18 px-2 text-center text-base tracking-wide text-neutral-500 sm:px-0 sm:text-xl">
          Serving content? Let your fans serve the chai. It's simpler than you
          think.
        </p>

        {/* CTA button with Logo */}
        <div className="group relative mb-6 inline-block cursor-pointer sm:mb-8">
          <img
            src={logo}
            alt="Logo Image"
            draggable="false"
            className="pointer-events-none absolute -top-7 -left-3 z-10 h-14 w-14 rotate-[-10deg] transition-all duration-500 ease-in-out group-hover:top-9 group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 group-hover:rotate-0 group-focus:top-9 group-focus:left-1/2 group-focus:-translate-x-1/2 group-focus:-translate-y-1/2 group-focus:rotate-0 group-active:top-9 group-active:left-1/2 group-active:-translate-x-1/2 group-active:-translate-y-1/2 group-active:rotate-0"
          />
          <NavLink
            to="/signup"
            className="bg-chaiBrown relative inline-block overflow-hidden rounded-full border-2 border-[#BB591C] px-10 py-4 text-lg font-bold text-white shadow-[7px_5px_56px_-20px_#BB591C] transition duration-300 ease-in-out hover:bg-[#BB591C] hover:shadow-[7px_5px_66px_-10px_#BB591C] sm:px-12 sm:py-5 sm:text-xl"
          >
            <span className="transition-opacity duration-300 group-hover:opacity-0">
              Get Started
            </span>
          </NavLink>
        </div>
      </div>
    </section>
  );
};
