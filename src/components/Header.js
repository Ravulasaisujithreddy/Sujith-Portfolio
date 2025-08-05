import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Button from './Button';
import { FaSun, FaMoon } from 'react-icons/fa';
import Tippy from '@tippyjs/react';

const Header = ({ 
  isMenuOpen, 
  setIsMenuOpen, 
  sections, 
  scrollToSection, 
  headerRef, 
  isDarkMode, 
  toggleTheme,
  profileImage
}) => {
  return (
    <header ref={headerRef} className="sticky px-4 top-0 z-10 backdrop-blur-sm bg-white/75 dark:bg-gray-900/75 border-b border-gray-200 dark:border-gray-700">
      <nav className="container mx-auto flex justify-between items-center py-4 px-4 md:px-0">
        <div className='flex items-center'>
          <img
            src={profileImage}
            alt="Profile"
            width={48}
            height={48}
            className="rounded-full mr-3 border-2 border-blue-500"
          />
          <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            SAI SUJITH REDDY RAVULA
          </h1>
        </div>
        
        <div className="hidden md:flex space-x-4 items-center">
          {sections.map((item, index) => (
            <Button 
              key={item} 
              variant="ghost" 
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
              onClick={() => scrollToSection(index)}
            >
              {item}
            </Button>
          ))}
          
          <Tippy 
            content={<span className="text-sm">Toggle Theme</span>}
            arrow={true}
            className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded p-2 shadow-lg"
          >
            <button 
              onClick={toggleTheme} 
              className={`w-8 h-8 inline-flex items-center justify-center rounded-full border-2 
                ${isDarkMode ? 'border-gray-300 hover:bg-gray-700' : 'border-blue-500 hover:bg-white'} `}
            >
              {isDarkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>
          </Tippy>
        </div>
        
        <div className='px-4'>
          <Button 
            variant="outline" 
            className="block md:hidden" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </Button>
        </div>
      </nav>
      
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          {sections.map((item, index) => (
            <Button 
              key={item} 
              variant="ghost" 
              className="w-full text-left py-2 px-4 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
              onClick={() => scrollToSection(index)}
            >
              {item}
            </Button>
          ))}
          <div className="flex justify-center py-3">
            <button 
              onClick={toggleTheme} 
              className={`w-8 h-8 inline-flex items-center justify-center rounded-full border-2 
                ${isDarkMode ? 'border-gray-300 hover:bg-gray-700' : 'border-blue-500 hover:bg-white'} `}
            >
              {isDarkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;