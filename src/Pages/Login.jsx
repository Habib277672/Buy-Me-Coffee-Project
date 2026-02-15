import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Images/logo.png";

export const Login = () => {
  const [current, setCurrent] = useState({
    email: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(current);
    setCurrent({
      email: "",
    });
  };

  return (
    <div className="flex min-h-screen flex-col justify-between bg-white px-4 py-3 antialiased">
      {/* Login Top Bar */}
      <div className="mb-8 flex w-full items-center justify-between px-2 sm:px-5">
        <NavLink to="/">
          <img
            src={logo}
            alt="Logo Image"
            className="h-10 w-10 cursor-pointer object-contain md:mr-20 md:h-12 md:w-12 lg:mr-0"
            draggable={false}
          />
        </NavLink>

        <p className="text-xs font-semibold text-neutral-900 md:text-[16px]">
          Don't have an account?{" "}
          <NavLink to="/signup" className="font-medium underline">
            Sign up
          </NavLink>
        </p>
      </div>

      {/* Login Form Etc */}
      <div className="flex grow items-center justify-center">
        <div className="w-full max-w-xs">
          <h2 className="mb-6 text-center text-xl font-bold sm:text-2xl">
            Welcome back
          </h2>

          <form onSubmit={handleFormSubmit} className="space-y-3">
            <input
              type="email"
              name="email"
              value={current.email}
              onChange={(e) =>
                setCurrent({
                  ...current,
                  [e.target.name]: e.target.value,
                })
              }
              placeholder="Email"
              className="w-full rounded-lg border-none bg-neutral-100 p-3 px-4 text-sm font-semibold transition duration-300 outline-none placeholder:text-left placeholder:font-semibold placeholder:text-neutral-500 hover:bg-neutral-200 focus:bg-transparent focus:ring-1 focus:ring-neutral-800 focus:ring-offset-1"
            />
            <button
              type="submit"
              className="bg-chaiBrown w-full cursor-pointer rounded-full py-3 text-sm font-semibold text-white transition duration-300 hover:opacity-90 active:scale-95"
            >
              Continue with email
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
