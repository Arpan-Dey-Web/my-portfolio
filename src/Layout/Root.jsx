import React from "react";
import Navbar from "../Component/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Component/Footer/Footer";
import Lenis from "lenis";

const Root = () => {
  // Initialize Lenis
  const lenis = new Lenis({
    autoRaf: true,
  });

  // Listen for the scroll event and log the event data
  lenis.on("scroll", () => {});
  return (
    <div>
      <Navbar />
      <div className="  w-11/12 mx-auto">
        <Outlet />
      </div>
          <Footer />
         
      </div>
      
  );
};

export default Root;
