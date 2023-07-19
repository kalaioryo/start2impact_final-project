import React, { useState, useEffect } from 'react'

import LottieDarkMode from '../lottie-components/LottieDarkMode'

const DarkMode = () => {
  const [ theme, setTheme ] = useState(null)

  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme('dark')
    }
    else {
      setTheme('light')
    }
  },[])

  useEffect(() => {
    if(theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }

  },[theme])

  const handleThemeSwitch = ()=> {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className='h-full' >
      <button className='h-full' onClick={handleThemeSwitch}>
        <LottieDarkMode theme={theme} />
      </button>
      
    </div>
  )
}

export default DarkMode