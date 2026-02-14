import React from "react";
import { NavBar } from "../UI/NavBar";
import { Footer } from "../UI/Footer";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};
