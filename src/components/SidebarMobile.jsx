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

import { LuSyringe, LuSettings, LuLayoutDashboard } from "react-icons/lu";

const SidebarMobile = () => {
  const [open, setOpen] = useState(false);

  const Modal = ({close}) => {
    return (
      <div className="fixed top-0 left-0 w-screen h-screen bg-secondary flex justify-center flex-col items-center">
        <ul className="w-screen flex flex-col justify-evenly">
          <NavLink to={"/"} onClick={close} >
            <li className="cursor-pointer select-none p-2 my-2 text-2xl text-center w-[80%] m-auto text-primary bg-ternary rounded-md hover:bg-quaternary active:bg-primary active:text-quinary  ">
              <span className="fixed py-1 text-2xl block float-left">
                <LuLayoutDashboard />
              </span>
              Home
            </li>
          </NavLink>
          <NavLink to={"/map"} onClick={close}>
            <li className="cursor-pointer select-none p-2 my-2 text-2xl text-center w-[80%] m-auto text-primary bg-ternary rounded-md hover:bg-quaternary active:bg-primary active:text-quinary ">
              <span className="fixed py-1 text-2xl block float-left">
                <GiItalia />
              </span>
              Italia
            </li>
          </NavLink>
          <NavLink to={"/regions"} onClick={close}>
            <li className="cursor-pointer select-none p-2 my-2 text-2xl text-center w-[80%] m-auto text-primary bg-ternary rounded-md hover:bg-quaternary active:bg-primary active:text-quinary ">
              <span className="fixed py-1 text-2xl block float-left">
                <GiHills />
              </span>
              Regions
            </li>
          </NavLink>
          <NavLink onClick={close}>
            <li className="cursor-pointer select-none p-2 my-2 text-2xl text-center w-[80%] m-auto text-primary bg-ternary rounded-md hover:bg-quaternary active:bg-primary active:text-quinary ">
              <span className="fixed py-1 text-2xl block float-left">
                <LuSettings />
              </span>
              Setting
            </li>
          </NavLink>
          <NavLink to={"/about"} onClick={close}>
            <li className="cursor-pointer select-none p-2 my-2 text-2xl text-center w-[80%] m-auto text-primary bg-ternary rounded-md hover:bg-quaternary active:bg-primary active:text-quinary ">
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
    <nav className="flex fixed top-0 right-0 w-screen justify-end bg-secondary p-2 z-10">
      {open && <Modal close={closeSidebar} />}

      <div className="z-20">
        <GiHamburgerMenu
          className={` active:bg-ternary cursor-pointer text-4xl rounded-xl  p-1  border-primary bg-secondary text-primary " 
          } `} //${!open && "rotate-180"}
          onClick={toggleSidebar}
        />
      </div>
    </nav>
  );
};

export default SidebarMobile;
