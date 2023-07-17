import React from 'react';

import { NavLink } from 'react-router-dom';

import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdOutlineContactPage } from 'react-icons/md'
import { LuFileJson } from 'react-icons/lu'
import LottieAstroDeveloper from '../components/lottie-components/LottieAstroDeveloper';


const About = () => {
  return (
    <div className='bg-quaternary/70'>
      <h1 className="py-5 w-full text-3xl text-center">About me</h1>

      <div>
        <LottieAstroDeveloper/>
      </div>

      <div className='py-5 px-  2 text-center'>
        <p>Se il  sito ti è piaciuto e vuoi saperne di più su di me:</p>
      </div>

      

      <div className='bg-ternary/20 flex flex-col w-3/4 md:w-2/4 lg:w-2/6 xl:w-1/4 m-auto'>

        <NavLink to={"https://www.linkedin.com/in/antonio-iorio-5376511bb/"} target="_blank">
          <div className='flex p-4'>
            <FaLinkedin  style={{fontSize: '30px'}}/>
            <span className='pl-2 m-1'>Contattami su Linkedin</span>
          </div>          
        </NavLink>

        <NavLink to={'https://github.com/kalaioryo'} target="_blank" >
          <div className="flex p-4">
            <FaGithub style={{fontSize: '30px'}}/>
            <span className="pl-2 m-1">Per gli altri progetti</span>
          </div>
        </NavLink>

        <NavLink to={'https://antonio-iorio.netlify.app/'} target="_blank">
          <div className="flex p-4">
            <MdOutlineContactPage style={{fontSize: '30px'}}/>
            <span className="pl-2 m-1">Il mio Portfolio</span>
          </div>
        </NavLink>

        <NavLink to={'https://github.com/pcm-dpc/COVID-19'} target="_blank" >
          <div className="flex p-4">
            <LuFileJson style={{fontSize: '30px'}} />
            <span className="pl-2 m-1">la fonte dei dati</span>
          </div>
          
        </NavLink>

      </div>

    </div>
  )
}

export default About