import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Regions from "../pages/Regions";
import Map from "../pages/Map";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import LayoutPublic from "../layout/LayoutPublic";
import Region from "../pages/Region";

export  const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic/>,
    errorElement: <NotFound/>,
    children: [
      {
        errorElement: <NotFound/>,
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
            path: "/regions/:id",
            element: <Region/>
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