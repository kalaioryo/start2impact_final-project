import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Regions from "../pages/Regions";
import Map from "../pages/Map";
import About from "../pages/About";
import LayoutPublic from "../layout/LayoutPublic";
import Provinces from "../pages/Provinces";
import RootBoundary from "../components/RootBoundary";

export  const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic/>,
    errorElement: <RootBoundary/>,
    children: [
      {
        errorElement: <RootBoundary/>,
        children: [
          {
            index: true,
            element: <Home/>,
          },
          {
            path: "/map",
            element: <Map/>,
          },
          {
            path: "/regions",
            element: <Regions/>,
          },
          {
            path: "/provinces",
            element: <Provinces/>
          },
          {
            path: "/about",
            element: <About/>,
          }
        ] 
      },
    ]
  }
])