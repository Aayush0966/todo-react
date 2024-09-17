import React from 'react';

function DarkButton({ onClick}) {
  return (
    <a
    onClick={() => onClick()}

      className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
    >
      <span className="w-52 h-52 rounded rotate-[-40deg] bg-blue-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
      <span className="relative px-3 py-1 w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
        Add
      </span>
    </a>
  );
}

export default DarkButton;
