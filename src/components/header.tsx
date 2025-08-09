import React, { useState } from "react";
import '../styles/global.scss'; // Adjust path as needed
import resume from '../assets/resume.pdf';
type MenuType = {
  name: string;
  id: string;
  linkTo: string;
}

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const headerList: MenuType[] = [
    {
      name: 'About Me',
      id: '101',
      linkTo: 'about'
    },
    {
      name: 'Skills',
      id: '102',
      linkTo: 'skills'
    },
    {
      name: 'Experience',
      id: '103',
      linkTo: 'experience'
    },
    {
      name: 'Contact',
      id: '104',
      linkTo: 'contact'
    },

  ]

  const [active, setActive] = useState(headerList[0].id);

  const onClickHander = (e: React.MouseEvent<HTMLElement>, id: string) => {
    setActive(id);
  }


  return (
    <header className="header-bg px-6 py-4 flex items-center justify-between relative sticky top-0 z-10 shadow-[0_0_11px_5px_#1a1a1a70] ">
      {/* Left: Name */}
      <div className="header-title">Ravi Kumar Rana</div>

      {/* Desktop Menu Center */}
      <nav className="hidden md:flex flex-1 justify-center space-x-9 items-center">
        {
          headerList.map((header) => (
            <div key={header.id} className={`${header.id === active ? 'underline' : ''}`} onClick={(e) => onClickHander(e, header.id)}><a href={`#${header.linkTo}`} className="header-link hover:text-blue-100">{header.name}</a></div>
          ))
        }
      </nav>

      {/* Right: Resume + Hamburger */}
      <div className="flex items-center space-x-3">
        {/* Resume button */}
        <a
          href={resume}
          target="_blank"
          className="header-link px-4 py-2 flex items-center space-x-2 
          font-semibold border border-white rounded-md hover:bg-white hover:text-[#1f5886a3] transition-colors"
        >
          Resume
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 3h7m0 0v7m0-7L10 14m-7 7a9 9 0 009-9"
            />
          </svg>
        </a>

        {/* Hamburger (mobile only, right corner) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-white mb-1 rounded"></span>
          <span className="block w-6 h-0.5 bg-white mb-1 rounded"></span>
          <span className="block w-6 h-0.5 bg-white rounded"></span>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full header-bg z-50 flex flex-col items-center py-4 space-y-2">
          {
            headerList.map((header) => (
              <div key={header.id} className={`${header.id === active ? 'underline' : ''}`} onClick={(e) => onClickHander(e, header.id)}><a href={`#${header.linkTo}`} className="header-link hover:text-blue-100 block px-4 py-2">{header.name}</a></div>
            ))
          }       
        </div>
      )}
    </header>
  );
}
