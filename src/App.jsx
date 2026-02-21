import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./Components/Layout/AppLayout";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { Signup } from "./Pages/SignUp";
import { IOS } from "./Pages/IOS";
import { Android } from "./Pages/Android";
import { HelpCenter } from "./Pages/HelpCenter";
import { WallofLove } from "./Pages/WallofLove";
import { FAQ } from "./Pages/FAQ";
import "./App.css";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/faq",
          element: <FAQ />,
        },
        {
          path: "/walloflove",
          element: <WallofLove />,
        },
        {
          path: "/ios",
          element: <IOS />,
        },
        {
          path: "/android",
          element: <Android />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/helpcenter",
      element: <HelpCenter />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
