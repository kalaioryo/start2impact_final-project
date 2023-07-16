import React, { useEffect, useState } from "react";
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

import { LuSyringe, LuSettings, LuLayoutDashboard } from "react-icons/lu";

import {TbMapSearch} from "react-icons/tb"
import {FaCity} from "react-icons/fa"
import DarkMode from "./button/DarkMode";

const SidebarMobile = () => {
  const [open, setOpen] = useState(false);

  const Modal = ({close}) => {

    return (
      <div className="fixed top-0 left-0 w-screen h-screen bg-secondary flex justify-center flex-col items-center xl:hidden">       
        <ul className="w-screen flex flex-col justify-evenly">
          <NavLink to={"/"} onClick={close} >
            <li className="cursor-pointer select-none p-2 my-2 text-2xl text-center w-[80%] m-auto text-primary bg-quaternary rounded-md hover:bg-ternary active:bg-primary active:text-quinary  ">
              <span className="fixed py-1 text-2xl block float-left">
                <GiItalia />
              </span>
              Home
            </li>
          </NavLink>
          <NavLink to={"/map"} onClick={close}>
            <li className="cursor-pointer select-none p-2 my-2 text-2xl text-center w-[80%] m-auto text-primary bg-quaternary rounded-md hover:bg-ternary active:bg-primary active:text-quinary ">
              <span className="fixed py-1 text-2xl block float-left">
                <TbMapSearch />
              </span>
              Mappa
            </li>
          </NavLink>
          <NavLink to={"/regions"} onClick={close}>
            <li className="cursor-pointer select-none p-2 my-2 text-2xl text-center w-[80%] m-auto text-primary bg-quaternary rounded-md hover:bg-ternary active:bg-primary active:text-quinary ">
              <span className="fixed py-1 text-2xl block float-left">
                <GiHills />
              </span>
              Regioni
            </li>
          </NavLink>
          <NavLink to={"/provinces"} onClick={close}>
            <li className="cursor-pointer select-none p-2 my-2 text-2xl text-center w-[80%] m-auto text-primary bg-quaternary rounded-md hover:bg-ternary active:bg-primary active:text-quinary ">
              <span className="fixed py-1 text-2xl block float-left">
                <FaCity />
              </span>
              Province
            </li>
          </NavLink>
          <NavLink to={"/about"} onClick={close}>
            <li className="cursor-pointer select-none p-2 my-2 text-2xl text-center w-[80%] m-auto text-primary bg-quaternary rounded-md hover:bg-ternary active:bg-primary active:text-quinary ">
              <span className="fixed py-1 text-2xl block float-left">
                <GiInfo />
              </span>
              About
            </li>
          </NavLink>
        </ul>
      </div>
    );
  };

  const toggleSidebar = () => {
    setOpen(!open);
  };

  const closeSidebar = () => {
    setOpen(false)
    console.log("close");
  };

  return (
    <nav className="flex fixed top-0 left-0  w-full justify-end bg-secondary p-2 z-20 md:hidden border-b-2 shadow-2xl">
      {open && <Modal close={closeSidebar} />}

      <DarkMode/>

      <div className="z-20">
        <GiHamburgerMenu
          className={` active:bg-ternary cursor-pointer text-4xl rounded-xl  p-1  border-primary bg-secondary text-quaternary " 
          } `} //${!open && "rotate-180"}
          onClick={toggleSidebar}
        />
      </div>
    </nav>
  );
};

export default SidebarMobile;
