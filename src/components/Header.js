import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Button from './Button';
import imageSrc from '../utils/IMG_20221120_085848-01.JPG';
import { FaSun, FaMoon } from 'react-icons/fa';
import Tippy from '@tippyjs/react';

const Header = ({ isMenuOpen, setIsMenuOpen, sections, scrollToSection,headerRef , isDarkMode, toggleTheme }) => {
  return (
    <header ref={headerRef} className="sticky px-4 top-0 z-10 backdrop-blur-sm bg-white/75 dark:bg-gray-900/75 border-b border-gray-200 dark:border-gray-700">
      <nav className="container mx-auto flex justify-between items-center py-4 px-4 md:px-0">
      <div className='flex items-center justify-between'>
      <img
            src={imageSrc} // Updated path to access the image correctly
            alt="SAI SUJITH REDDY RAVULA"
            width={50}
            height={50}
            className=" rounded-full mx-4 shadow-lg object-cover "
          />
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">SAI SUJITH REDDY <span className='text-gray-300 hidden sm:inline'>RAVULA</span></h1>
        </div>
        <div className="hidden md:flex space-x-4">
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
               content={<span className="text-sm text-gray-700 dark:text-gray-300">Theme</span>} // Styled content
               arrow={true} // Optional: adds an arrow to the tooltip
               className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded p-2 shadow-lg" // Custom styles for Tippy
             >
           <button // Changed to Button component for consistency
            onClick={toggleTheme} 
            variant="ghost" // Added variant for styling consistency
            className={`w-8 h-8 inline-flex items-center justify-center rounded-full border-2 
              ${isDarkMode ? 'border-gray-300 hover:bg-gray-700' : 'border-blue-500 hover:bg-white'} `}
          >
          {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
          </Tippy>
        </div>
        <div className='px-4'>
        
        <Button variant="outline" className="hidden sm:block md:block" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
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
              onClick={() => {
                console.log(index);
                scrollToSection(index);
              }}
            >
              {item}
            </Button>
          ))
          }
           <Tippy 
               content={<span className="text-sm text-gray-700 dark:text-gray-300">Theme</span>} // Styled content
               arrow={true} // Optional: adds an arrow to the tooltip
               className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded p-2 shadow-lg" // Custom styles for Tippy
             >
              <button 
            onClick={toggleTheme} 
            className={`w-6 h-6 inline-flex items-center justify-center rounded-full border-2 
              ${isDarkMode ? 'border-gray-300 hover:bg-gray-700' : 'border-blue-500 hover:bg-white'} ml-auto`}
          >
          {isDarkMode ? <FaSun size={15} /> : <FaMoon size={15} />}
        </button>
             </Tippy>
          
        </div>
      )}
    </header>
  );
};

export default Header;
