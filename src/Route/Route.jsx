import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import SingleProject from "../Component/Projects/SingleProject";
import Root from "../Layout/Root";
import Loading from "../Component/Loading/Loading";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    hydrateFallbackElement: Loading,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "Project/:id",
        Component: SingleProject,
      },
    ],
  },
]);
