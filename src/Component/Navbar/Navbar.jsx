import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive ? 'text-[#4eb1ff]' : 'text-white hover:text-blue-400';

  return (
    <nav className="sticky top-0 z-50 bg-[#1e293b] shadow-md px-8 py-4 w-full">
      <div className="flex items-center justify-between">
        {/* Logo + Title */}
        <div className="flex items-center space-x-4">
          <div
            className="w-10 h-10 bg-[#334155] text-white font-bold text-lg flex items-center justify-center"
            style={{
              clipPath:
                'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
            }}
          >
            F
          </div>
          <span className="text-white italic text-lg font-medium">
            GAME REVIEWS
          </span>
        </div>

        {/* Hamburger button for mobile */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <li><NavLink to="/" className={navLinkClass}>MMORPG</NavLink></li>
          <li><NavLink to="/Shooter" className={navLinkClass}>SHOOTER</NavLink></li>
          <li><NavLink to="/Sailing" className={navLinkClass}>SAILING</NavLink></li>
          <li><NavLink to="/Permadeath" className={navLinkClass}>PERMADEATH</NavLink></li>
          <li><NavLink to="/Superhero" className={navLinkClass}>SUPERHERO</NavLink></li>
          <li><NavLink to="/Pixel" className={navLinkClass}>PIXEL</NavLink></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col mt-4 space-y-2 md:hidden text-sm font-medium">
          <li><NavLink to="/" className={navLinkClass}>MMORPG</NavLink></li>
          <li><NavLink to="/Shooter" className={navLinkClass}>SHOOTER</NavLink></li>
          <li><NavLink to="/Sailing" className={navLinkClass}>SAILING</NavLink></li>
          <li><NavLink to="/Permadeath" className={navLinkClass}>PERMADEATH</NavLink></li>
          <li><NavLink to="/Superhero" className={navLinkClass}>SUPERHERO</NavLink></li>
          <li><NavLink to="/Pixel" className={navLinkClass}>PIXEL</NavLink></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
