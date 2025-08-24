import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { router } from "./Route/Route.jsx";
import { RouterProvider } from "react-router";

import AnimatedCursor from "react-animated-cursor";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <AnimatedCursor
      innerSize={8}
      outerSize={35}
      color="0, 255, 255"
      outerAlpha={0.4}
      innerScale={1}
      outerScale={1.5}
      innerStyle={{
        backgroundColor: "rgb(0, 255, 255)",
      }}
      outerStyle={{
        border: "2px solid rgb(0, 255, 255)",
        backgroundColor: "transparent",
      }}
    /> */}
  </StrictMode>
);
