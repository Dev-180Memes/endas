import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full z-20 bg-white md:px-7 fixed">
      <div className="container mx-auto px-3 py-4 flex justify-between items-center drop-shadow">
        <div className="flex items-center gap-1">
          <img src="/logo.png" alt="St Endas College" className="w-11" />
          <span className="font-semibold text-base">St Endas <br /> College</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-blue-600 font-normal text-base text-center">Home</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-normal text-base text-center">Admissions</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-normal text-base text-center">News</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-normal text-base text-center">Gallery</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-normal text-base text-center">Calender</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-normal text-base text-center">Contact</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-normal text-base text-center">About Us</a>
        </div>
        <a href="#" className="hidden md:flex px-10 py-2 bg-blue-600 text-white rounded-md text-base">Portal</a>
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block text-blue-600">Home</a>
            <a href="#" className="block text-gray-700 hover:text-blue-600">Admissions</a>
            <a href="#" className="block text-gray-700 hover:text-blue-600">News</a>
            <a href="#" className="block text-gray-700 hover:text-blue-600">Gallery</a>
            <a href="#" className="block text-gray-700 hover:text-blue-600">Calender</a>
            <a href="#" className="block text-gray-700 hover:text-blue-600">Contact</a>
            <a href="#" className="block text-gray-700 hover:text-blue-600">About Us</a>
            <a href="#" className="block px-4 py-2 bg-blue-600 text-white rounded-lg">Portal</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
