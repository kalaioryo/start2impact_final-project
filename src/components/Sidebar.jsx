import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  GiHamburgerMenu,
  GiItalia,
  GiHealthIncrease,
  GiHealthNormal,
  GiHospital,
  GiSyringe,
  GiHills,
  GiInfo,
} from "react-icons/gi";
import { BsSearch, BsChevronDown } from "react-icons/bs";
import { FaVirusSlash, FaVirus, FaBedPulse, FaCity } from "react-icons/fa";
import { VscGraph, VscPerson, VscPersonAdd, VscMap } from "react-icons/vsc";
import { SiWorldhealthorganization } from "react-icons/si";
import { LuSyringe, LuSettings, LuLayoutDashboard } from "react-icons/lu";
import { SlSettings } from "react-icons/sl";
import { TbMapSearch } from "react-icons/tb";
import DarkMode from "./button/DarkMode";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [menuSetting, setMenuSetting] = useState(false);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  const closeSidebar = () => {
    setOpen(false)
  }

  const toggleSubMenu = () => {
    setMenuSetting(false);
    setSubMenuOpen(!subMenuOpen);
  };

  const toggleMenuSetting = () => {
    setSubMenuOpen(false);
    setMenuSetting(!menuSetting);
  };

  return (
    <div className="flex fixed z-20 top-0">
      <div>
        <div
          className={`hidden md:block bg-primary h-screen p-5 text-primary min-h-screen h-full pt-8 relative duration-300 ${
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
            <span className="text-4xl text-quaternary p-1 block float-left">
              <FaVirus />
            </span>

            {/* <img className={`w-10 cursor-pointer rounded-full ${!open && "p-0 object-cover"}`} src={logo} alt="logo" /> */}
            <h1
              className={`text-quaternary origin-left font-medium uppercase text-xl mt-1 ml-2 py-1 truncate  ${
                !open && "hidden"
              }`}
            >
              Covid-19
            </h1>
          </div>

              <div className="h-[45px] w-[50px]">
                <DarkMode/>
              </div>
          

          



          <ul className="pt-2">
            <NavLink to={"/"} onClick={closeSidebar}>
                <li className="text-quaternary text-sm flex items-center gap-x-4 p-2 hover:bg-ternary/10 rounded-md mt-2">
                <span className="text-2xl block float-left">
                  <GiItalia />
                </span>
                <span
                  className={`text-base font-medium flex-1 ${!open && "hidden"}`}
                >
                  Italia
                </span>
              </li>
            </NavLink>

            <NavLink to={"/map"} onClick={closeSidebar}>
              <li className="text-quaternary text-sm flex items-center gap-x-4 p-2 hover:bg-ternary/10 rounded-md mt-2 border-b border-b-ternary">
                <span className="text-2xl block float-left">
                  <TbMapSearch />
                </span>
                <span
                  className={`text-base font-medium flex-1 ${!open && "hidden"}`}
                >
                  Mappa
                </span>
              </li>
            </NavLink>
            
            <NavLink to={"/regions"} onClick={closeSidebar}>
              <li className="text-quaternary text-sm flex items-center gap-x-4 p-2 hover:bg-ternary/10 rounded-md mt-6">
                <span className="text-2xl block float-left">
                  <GiHills />
                </span>
                <span
                  className={`text-base font-medium flex-1 ${!open && "hidden"}`}
                >
                  Regioni
                </span>
              </li>
            </NavLink>

            <NavLink to={"/provinces"} onClick={closeSidebar}>
              <li className="text-quaternary text-sm flex items-center gap-x-4 p-2 hover:bg-ternary/10 rounded-md mt-2 border-b border-b-ternary">
                <span className="text-2xl block float-left">
                  <FaCity />
                </span>
                <span
                  className={`text-base font-medium flex-1 ${!open && "hidden"}`}
                >
                  Province
                </span>
            </li>
            </NavLink>



            <li className="text-quaternary text-sm flex items-center gap-x-4 p-2 hover:bg-ternary/10 rounded-md mt-2">
              <NavLink to={'/about'}>
                <span className="text-2xl block float-left">
                  <GiInfo />
                </span>
              </NavLink>
              
              <span
                className={`text-base font-medium flex-1 ${!open && "hidden"}`}
              >
                About
              </span>
              {open && (
                <span onClick={toggleMenuSetting}>
                  <BsChevronDown className="text-2xl" />
                </span>
              )}
            </li>
            {open && menuSetting && (
              <ul>
                <NavLink to={"/about"} onClick={closeSidebar}>
                  <li className="text-quaternary text-sm flex items-center gap-x-4 p-2 hover:bg-ternary/10 rounded-md mt-2">
                    About me
                  </li>
                </NavLink>
                
                <li className="text-quaternary text-sm flex items-center gap-x-4 p-2 hover:bg-ternary/10 rounded-md mt-2">
                  Portfolio
                </li>
                <li className="text-quaternary text-sm flex items-center gap-x-4 p-2 hover:bg-ternary/10 rounded-md mt-2">
                  Github
                </li>
                <li className="text-quaternary text-sm flex items-center gap-x-4 p-2 hover:bg-ternary/10 rounded-md mt-2">
                  Linkedin
                </li>
                <li className="text-quaternary text-sm flex items-center gap-x-4 p-2 hover:bg-ternary/10 rounded-md mt-2">
                  Api
                </li>
              </ul>
            )}

            {/* <li className="text-quaternary text-sm flex items-center gap-x-4 p-2 hover:bg-ternary/10 rounded-md mt-2">
              <span className="text-2xl block float-left">
                <SiWorldhealthorganization />
              </span>
              <span
                className={`text-base font-medium flex-1 ${!open && "hidden"}`}
              >
                WHO
              </span>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
