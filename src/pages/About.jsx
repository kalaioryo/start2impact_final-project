import React from 'react';

import { NavLink } from 'react-router-dom';

import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdOutlineContactPage } from 'react-icons/md'
import { LuFileJson } from 'react-icons/lu'
import LottieAstroDeveloper from '../components/lottie-components/LottieAstroDeveloper';
import { Helmet } from 'react-helmet';


const About = () => {
  return (
    <div className='pb-8 h-full min-h-screen bg-quaternary/70 dark:bg-dark-primary/95 dark:text-dark-quaternary'>
      <Helmet>
          <meta charSet="utf-8" />
          <title>About - Covid dashboard 2023</title>
          <meta name='description' content='About me'/>
          <link rel="canonical" href="/about" />
      </Helmet>
      <h1 className="py-10 w-full text-3xl text-center">About me</h1>

      <div className=''>
        <LottieAstroDeveloper/>
      </div>

      <div className='py-12 px-2 text-center'>
        <p>Se il  sito ti è piaciuto e vuoi saperne di più su di me:</p>
      </div>

      <div className='bg-ternary/20 dark:bg-dark-primary/70 flex flex-col w-3/4 md:w-2/4 lg:w-2/6 xl:w-1/4 m-auto'>

        <NavLink to={"https://www.linkedin.com/in/antonio-iorio-5376511bb/"} target="_blank">
          <div className='flex p-4 link'>
            <FaLinkedin  style={{fontSize: '30px'}}/>
            <span className='pl-2 m-1'>Contattami su Linkedin</span>
          </div>          
        </NavLink>

        <NavLink to={'https://github.com/kalaioryo'} target="_blank" >
          <div className="flex p-4 link">
            <FaGithub style={{fontSize: '30px'}}/>
            <span className="pl-2 m-1">Per gli altri progetti</span>
          </div>
        </NavLink>

        <NavLink to={'https://antonio-iorio.netlify.app/'} target="_blank">
          <div className="flex p-4 link">
            <MdOutlineContactPage style={{fontSize: '30px'}}/>
            <span className="pl-2 m-1">Il mio Portfolio</span>
          </div>
        </NavLink>

        <NavLink to={'https://github.com/pcm-dpc/COVID-19'} target="_blank" >
          <div className="flex p-4 link">
            <LuFileJson style={{fontSize: '30px'}} />
            <span className="pl-2 m-1">la fonte dei dati</span>
          </div>          
        </NavLink>

      </div>
    </div>
  )
}

export default About