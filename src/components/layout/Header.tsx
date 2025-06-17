import React from 'react';
import { Cog6ToothIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

const Header = () => {
  return (
    <header className="h-16 bg-[#23232a] flex items-center px-8 justify-between w-full border-b border-transparent fixed top-0 left-0 right-0 z-40">
      <div className="flex items-center space-x-8">
        <span className="text-2xl font-semibold tracking-tight text-white font-sans">Google AI Studio</span>
      </div>
      <div className="flex items-center space-x-4">
        <button className="px-5 py-2 bg-[#AECBFA] text-gray-900 rounded-full font-medium text-sm transition-colors shadow-sm hover:bg-[#c3e3fd]">Get API key</button>
        <nav className="flex items-center space-x-6 text-base">
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Studio</a>
          <a href="#" className="text-white font-semibold">Dashboard</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center"><DocumentTextIcon className="w-5 h-5 mr-1" />Documentation</a>
        </nav>
        <button className="p-2 rounded-full hover:bg-[#35363a] text-gray-400 hover:text-white transition-colors">
          <Cog6ToothIcon className="w-6 h-6" />
        </button>
        <div className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold text-lg">B</div>
      </div>
    </header>
  );
};

export default Header; 