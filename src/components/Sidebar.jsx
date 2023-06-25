import React, { useState } from 'react'

import { GiHamburgerMenu, GiItalia, GiHealthIncrease, GiHealthNormal, GiHospital, GiSyringe } from 'react-icons/gi';
import { BsSearch, BsChevronDown} from 'react-icons/bs';
import { FaVirusSlash, FaVirus, FaBedPulse } from 'react-icons/fa';
import { VscGraph, VscPerson, VscPersonAdd, VscMap } from 'react-icons/vsc';
import { SiWorldhealthorganization } from 'react-icons/si'
import { LuSyringe, LuSettings, LuLayoutDashboard } from 'react-icons/lu'
import { SlSettings } from 'react-icons/sl'

const Sidebar = () => {
  const [open, setOpen] = useState(false)
  const [subMenuOpen, setSubMenuOpen] = useState(false)
  const [menuSetting, setMenuSetting] = useState(false)

  const toggleSidebar = () =>{
    setOpen(!open)
  }

  const toggleSubMenu = () =>{
    setMenuSetting(false)
    setSubMenuOpen(!subMenuOpen)
  }

  const toggleMenuSetting = () =>{
    setSubMenuOpen(false)
    setMenuSetting(!menuSetting)
  }

  return (
    <div className='flex fixed z-10 top-0'>
      <div>
        <div className={`hidden lg:block bg-primary h-screen p-5 text-primary min-h-screen h-full pt-8 relative duration-300 ${open ?
        "w-72":"w-20"}`} >
          <GiHamburgerMenu 
            className={`bg-quaternary text-primary cursor-pointer text-3xl rounded-full absolute -right-3 top-9 p-1 border-2 border-primary ${!open && "rotate-180"}`}
            onClick={toggleSidebar}
            />
          <div className="inline-flex mb-6">
          <span className='text-4xl text-quaternary p-1 block float-left'><FaVirus/></span>

            {/* <img className={`w-10 cursor-pointer rounded-full ${!open && "p-0 object-cover"}`} src={logo} alt="logo" /> */}
            <h1 className={`text-quaternary origin-left font-medium uppercase text-xl mt-1 ml-2 py-1 truncate  ${!open && "hidden"}`}>Covid-19</h1>           
          </div>

          <div className={`flex items-center rounded-md bg-quaternary/80 py-2  ${!open ? "px-2.5":"px-4"}`}>
            <BsSearch className={`text-primary text-lg block float-left cursor-pointer mr-2 ${!open && "mr-0"}`}/>
            <input type='text' placeholder='Search' className={`text-base bg-transparent w-full text-primary placeholder:text-primary focus:outline-none ${!open && "hidden"}`}/>
          </div>

          <ul className='pt-2'>
            <li className='text-quaternary text-sm flex items-center gap-x-4 p-2 hover:bg-ternary/10 rounded-md mt-2'>
              <span className='text-2xl block float-left'><LuLayoutDashboard/></span>
              <span className={`text-base font-medium flex-1 ${!open && "hidden"}`}> Dashboard</span>
            </li>
            <li className='text-quaternary text-sm flex items-center gap-x-4 p-2 hover:bg-ternary/10 rounded-md mt-2 border-b border-b-ternary'>
              <span className='text-2xl block float-left'><LuSyringe/></span>
              <span className={`text-base font-medium flex-1 ${!open && "hidden"}`}> Page</span>
            </li>
            <li className='text-quaternary text-sm flex items-center gap-x-4 p-2 hover:bg-ternary/10 rounded-md mt-6'>
              <span className='text-2xl block float-left'><FaVirus/></span>
              <span className={`text-base font-medium flex-1 ${!open && "hidden"}`}> Virus</span>
            </li>
            
            <li className='text-quaternary text-sm flex items-center gap-x-4 p-2 hover:bg-ternary/10 rounded-md mt-2'>
              <span className='text-2xl block float-left'><GiItalia/></span>
              <span className={`text-base font-medium flex-1 ${!open && "hidden"}`}> Pages</span>
              {open && <span onClick={toggleMenuSetting}><BsChevronDown className='text-2xl'/></span>}
            </li>
            {
                open && menuSetting && (
                <ul>
                  <li className='text-quaternary text-sm flex items-center gap-x-4 p-2 hover:bg-ternary/10 rounded-md mt-2'>Dashboard 1</li>
                  <li className='text-quaternary text-sm flex items-center gap-x-4 p-2 hover:bg-ternary/10 rounded-md mt-2'>Dashboard 2</li>
                  <li className='text-quaternary text-sm flex items-center gap-x-4 p-2 hover:bg-ternary/10 rounded-md mt-2'>Dashboard 3</li>
                  <li className='text-quaternary text-sm flex items-center gap-x-4 p-2 hover:bg-ternary/10 rounded-md mt-2'>Dashboard 4</li>
                </ul>
              )
            }
            <li className='text-quaternary text-sm flex items-center gap-x-4 p-2 hover:bg-ternary/10 rounded-md mt-2 border-b border-b-ternary'>
              <span className='text-2xl block float-left'><VscGraph/></span>
              <span className={`text-base font-medium flex-1 ${!open && "hidden"}`}> Analytics</span>
            </li>
            
            <li className='text-quaternary text-sm flex items-center gap-x-4 p-2 hover:bg-ternary/10 rounded-md mt-2 '>
              <span className='text-2xl block float-left'><VscPerson/></span>
              <span className={`text-base font-medium flex-1 ${!open && "hidden"}`}> Profile</span>
            </li>
            
            <li 
              className='text-quaternary text-sm flex items-center gap-x-4 p-2 hover:bg-ternary/10 rounded-md mt-2'
              >
                
              <span className='text-2xl block float-left'><SlSettings/></span>
              <span className={`text-base font-medium flex-1 ${!open && "hidden"}`}> Setting</span>           
              {open && <span onClick={toggleSubMenu} ><BsChevronDown className='text-2xl'/></span>}
            </li>

            {
              open && subMenuOpen && (
                <ul>
                  <li className='text-quaternary text-sm flex items-center gap-x-4 p-2 hover:bg-ternary/10 rounded-md mt-2'>Setting 1</li>
                  <li className='text-quaternary text-sm flex items-center gap-x-4 p-2 hover:bg-ternary/10 rounded-md mt-2'>Setting 2</li>
                  <li className='text-quaternary text-sm flex items-center gap-x-4 p-2 hover:bg-ternary/10 rounded-md mt-2'>Setting 3</li>
                  <li className='text-quaternary text-sm flex items-center gap-x-4 p-2 hover:bg-ternary/10 rounded-md mt-2'>Setting 4</li>
                </ul>
              )
            }

            <li className='text-quaternary text-sm flex items-center gap-x-4 p-2 hover:bg-ternary/10 rounded-md mt-2'>
              <span className='text-2xl block float-left'><SiWorldhealthorganization/></span>
              <span className={`text-base font-medium flex-1 ${!open && "hidden"}`}>WHO</span>
            </li>
          </ul>
        </div>
      </div>



    </div>
  )
}

export default Sidebar