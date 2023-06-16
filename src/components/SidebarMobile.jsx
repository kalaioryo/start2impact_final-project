import React, { useState } from "react";
import {
  GiHamburgerMenu,
  GiItalia,
  GiHealthIncrease,
  GiHealthNormal,
  GiHospital,
  GiSyringe,
  GiHills,
  GiInfo
} from "react-icons/gi";

import { LuSyringe, LuSettings, LuLayoutDashboard } from "react-icons/lu";

const SidebarMobile = () => {
  const [open, setOpen] = useState(false);

  const Modal = () => {
    return (
      <div className="fixed top-0 left-0 w-screen h-screen bg-secondary flex justify-center flex-col items-center">
        <ul className="w-screen flex flex-col justify-evenly">
          <li className="cursor-pointer select-none p-2 my-2 text-xl text-center w-[80%] m-auto text-primary bg-ternary rounded-md hover:bg-quaternary active:bg-primary active:text-quinary  ">
            <span className="fixed py-1 text-xl block float-left">
              <LuLayoutDashboard />
            </span>
            Home
          </li>
          <li className="cursor-pointer select-none p-2 my-2 text-xl text-center w-[80%] m-auto text-primary bg-ternary rounded-md hover:bg-quaternary active:bg-primary active:text-quinary ">
            <span className="fixed py-1 text-xl block float-left">
              <GiItalia />
            </span>
            Italia
          </li>
          <li className="cursor-pointer select-none p-2 my-2 text-xl text-center w-[80%] m-auto text-primary bg-ternary rounded-md hover:bg-quaternary active:bg-primary active:text-quinary ">
            <span className="fixed py-1 text-xl block float-left">
              <GiHills />
            </span>
            Region
          </li>

          <li className="cursor-pointer select-none p-2 my-2 text-xl text-center w-[80%] m-auto text-primary bg-ternary rounded-md hover:bg-quaternary active:bg-primary active:text-quinary ">
            <span className="fixed py-1 text-xl block float-left">
              <LuSettings />
            </span>
            Setting
          </li>
          <li className="cursor-pointer select-none p-2 my-2 text-xl text-center w-[80%] m-auto text-primary bg-ternary rounded-md hover:bg-quaternary active:bg-primary active:text-quinary ">
            <span className="fixed py-1 text-xl block float-left">
              <GiInfo/>
            </span>
            About
          </li>
        </ul>
      </div>
    );
  };

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <nav className="flex fixed top-0 right-0 w-screen justify-end bg-secondary p-2 z-10">
      
      {open && <Modal />}

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
