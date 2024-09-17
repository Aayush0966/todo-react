import React, { useState, useEffect, useRef } from 'react';
import DarkButton from './DarkButton';
import LightButton from './LightButton';
import darkIcon from '../assets/dark.png';
import lightIcon from '../assets/light.png'
import { useDispatch } from 'react-redux';
import { addTask } from '../features/mode';
import headerIcon from '../assets/header.json'
import Lottie from 'lottie-react';

function Header() {
  const dispatch = useDispatch();
  const [darkMode, setDarkMode] = useState(true);
  const taskRef = useRef('');

  const handleClick = () => {
    dispatch(addTask(taskRef.current.value))
    taskRef.current.value = '';
  }

  useEffect(() => {
  (darkMode)? document.querySelector('html').className = 'dark' : document.querySelector('html').className = 'light';
  
  }, [darkMode]);

  return (
    <>
      <div className='relative z-10  text-center bg-[#95DBC4] dark:bg-black font-roboto w-full h-64 flex items-center justify-center px-4'>
        {/* Centered Todo text and logo */} 
        <div className='flex items-center justify-center w-full mb-6 '>
        <Lottie
        className='w-72 h-72 mb-5'
        animationData={headerIcon}
        loop={true} // Set to true if you want the animation to loop
        autoplay={true} // Set to true to start the animation automatically
      />
        </div>
        
        {/* Container for moon icon */}
        <img onClick={() => setDarkMode(!darkMode)} className='cursor-pointer absolute right-20 top-1/2 transform -translate-y-1/2 w-12 h-12' src={(darkMode)? darkIcon : lightIcon} alt="moon icon" />
      </div>

      {/* Ensure the input box and button are above the header */}
      <div className='relative z-20 flex gap-4 justify-center items-center -mt-10'>
        <input type="text" ref={taskRef} placeholder='Add a new task 📝' className='text-gray-500 dark:bg-Header font-roboto shadow-2xl rounded-lg dark:text-white font-semibold p-3 h-16 w-1/3' />
    
        {darkMode ? <DarkButton onClick={handleClick} /> : <LightButton onClick={handleClick} />}
        </div>
    </>
  );
}

export default Header;
