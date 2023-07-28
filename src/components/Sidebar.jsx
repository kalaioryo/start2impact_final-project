import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  GiHamburgerMenu,
  GiItalia,
  GiHills,
  GiInfo,
} from "react-icons/gi";
import { BsChevronDown } from "react-icons/bs";
import { FaCity } from "react-icons/fa";
import { TbMapSearch, TbLetterC } from "react-icons/tb";
import DarkMode from "./button/DarkMode";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  // const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [menuAbout, setMenuAbout] = useState(false);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  const closeSidebar = () => {
    setOpen(false);
  };

  const toggleMenuAbout = () => {
    setMenuAbout(!menuAbout);

  };

  return (
    <div className="flex fixed min-h-[100%] z-20 top-0">
      <div>
        <div
          className={`hidden md:block bg-primary dark:bg-dark-primary p-5  min-h-screen h-full pt-8 relative duration-300 ${
            open ? "w-72" : "w-20"
          }`}
        >
          <GiHamburgerMenu
            className={`bg-quaternary text-primary cursor-pointer text-3xl rounded-full absolute -right-3 top-9 p-1 border-2 border-primary ${
              !open && "rotate-180"
            }`}
            onClick={toggleSidebar}
          />
          <div className="inline-flex mb-6">
            <span className="text-3xl text-quaternary p-1 block float-left">
              <TbLetterC/>
            </span>

            <h1
              className={`text-quaternary origin-left font-medium uppercase text-xl mt-1 ml-2 py-1 truncate  ${
                !open && "hidden"
              }`}
            >
              Covid-19
            </h1>
          </div>

          <div className="w-[60px] absolute top-[70px] left-[10px]">
            <DarkMode />
          </div>

          <ul className="pt-4 mt-3">
            <NavLink to={"/"} onClick={closeSidebar}>
              <li className=" text-sm flex items-center gap-x-4 p-2 rounded-md mt-2 link-sidebar">
                <span className="text-2xl block float-left">
                  <GiItalia />
                </span>
                <span
                  className={`text-base font-medium flex-1 ${
                    !open && "hidden"
                  }`}
                >
                  Italia
                </span>
              </li>
            </NavLink>

            <NavLink to={"/map"} onClick={closeSidebar}>
              <li className="text-sm flex items-center gap-x-4 p-2  rounded-md mt-2 border-b border-b-ternary dark:border-b-dark-ternary link-sidebar">
                <span className="text-2xl block float-left">
                  <TbMapSearch />
                </span>
                <span
                  className={`text-base font-medium flex-1 ${
                    !open && "hidden"
                  }`}
                >
                  Mappa
                </span>
              </li>
            </NavLink>

            <NavLink to={"/regions"} onClick={closeSidebar}>
              <li className=" text-sm flex items-center gap-x-4 p-2 rounded-md mt-2 link-sidebar">
                <span className="text-2xl block float-left">
                  <GiHills />
                </span>
                <span
                  className={`text-base font-medium flex-1 ${
                    !open && "hidden"
                  }`}
                >
                  Regioni
                </span>
              </li>
            </NavLink>

            <NavLink to={"/provinces"} onClick={closeSidebar}>
              <li className="text-sm flex items-center gap-x-4 p-2  rounded-md mt-2 border-b border-b-ternary dark:border-b-dark-ternary link-sidebar">
                <span className="text-2xl block float-left">
                  <FaCity />
                </span>
                <span
                  className={`text-base font-medium flex-1 ${
                    !open && "hidden"
                  }`}
                >
                  Province
                </span>
              </li>
            </NavLink>

            <li className="text-sm flex items-center rounded-md mt-2 link-sidebar">
              <NavLink to={"/about"} onClick={closeSidebar}>
                <span className="text-3xl float-left ml-1">
                  <GiInfo/>
                </span>
              </NavLink>
              <NavLink to={"/about"} className={"w-full pl-5 cursor-pointer"} onClick={closeSidebar}>
                <span
                  className={`text-base font-medium  w-full ${
                    !open && "hidden"
                  }`}
                >
                  About
                </span>
              </NavLink>
              {open && (
                <span onClick={toggleMenuAbout}>
                  <BsChevronDown className="text-2xl" />
                </span>
              )}
            </li>
            {open && menuAbout && (
              <ul>
                <NavLink to={"/about"} onClick={closeSidebar}>
                  <li className="text-quaternary text-sm flex items-center gap-x-4 p-2 hover:bg-ternary/10 rounded-md mt-2">
                    About me
                  </li>
                </NavLink>

                <NavLink
                  to={"https://github.com/pcm-dpc/COVID-19"}
                  target="_blank"
                >
                  <li className="text-quaternary text-sm flex items-center gap-x-4 p-2 hover:bg-ternary/10 rounded-md mt-2">
                    Fonte dei dati
                  </li>
                </NavLink>
              </ul>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
