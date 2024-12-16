import React from 'react';
import {useEffect} from 'react';
import "./index.css";
function Navbar() {

  const [ darkMode, setDark ] = React.useState<boolean>(false);
  const toggleTheme = () => {
    setDark(!darkMode);
    
    
  }
  const root = document.getElementById("root")
  useEffect(() => {
    if (darkMode) {
      if (root) {
        root.className = "dark";
      }
    } else {
      if (root) {
        root.className = "";
      }
    }
  }, [darkMode])

    return ( <>
    <nav className="bg-white dark:!darkLayer0 p-2 flex justify-between items-center">
      <div className='flex flex-row items-center rounded-xl shadow-md px-5 py-2.5 gap-2'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/2560px-Flag_of_Japan.svg.png" className='h-10 border rounded-lg'/>
        <h1 className="text-xl text-bold">Japan</h1></div>
      <div className='flex flex-row gap-4'>
        <a href="#home" className="link">Home</a>
        <a href="#about" className="link">About</a>
        <a href="#stats" className="link">Stats</a>
        <a href="#visit" className="link">Visit</a>
      </div>
      <div className="flex">
      <label className="relative inline-flex cursor-pointer items-center">
      <input type="checkbox" id="example1" onChange={toggleTheme} className="peer sr-only" />
      <div className="radio"></div>
  </label>
  
      </div>
      </nav>
      </>
    )
}

export default Navbar