import React, { useState } from 'react';
import { KeyIcon, ChartBarIcon, Squares2X2Icon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const menuItems = [
  { icon: KeyIcon, label: 'API Keys', active: true },
  { icon: ChartBarIcon, label: 'Usage & Billing', active: false },
  { icon: Squares2X2Icon, label: 'Changelog', active: false },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={`h-screen bg-[#23232a] border-r border-[#23232a] fixed left-0 top-0 flex flex-col justify-between z-30 transition-all duration-200 ${collapsed ? 'w-20' : 'w-64'} rounded-r-3xl`}>
      <div className="flex flex-col items-center mt-6 mb-12">
        <img src="/logo192.png" alt="Logo" className="w-10 h-10" />
        {!collapsed && <span className="mt-4 text-lg font-semibold text-white">Google AI Studio</span>}
      </div>
      <nav className="flex flex-col gap-2 items-center flex-1">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className={`flex items-center ${collapsed ? 'justify-center w-12 h-12' : 'w-52 h-12 pl-4 pr-6'} rounded-full transition-all duration-200 mb-2
              ${item.active ? 'bg-[#35363a] text-white font-semibold' : 'text-gray-400 hover:bg-[#35363a] hover:text-white'}`}
            tabIndex={0}
            aria-label={item.label}
          >
            <item.icon className="w-6 h-6" />
            {!collapsed && item.active && <span className="ml-4 text-base">{item.label}</span>}
            {!collapsed && !item.active && <span className="ml-4 text-base text-gray-400">{item.label}</span>}
          </button>
        ))}
      </nav>
      <div className="flex flex-col items-center mb-6">
        <button
          className="w-10 h-10 flex items-center justify-center rounded-full bg-[#28282f] text-gray-400 hover:text-white hover:bg-[#35363a] mb-4 transition-colors"
          onClick={() => setCollapsed((c) => !c)}
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? <ChevronRightIcon className="w-5 h-5" /> : <ChevronLeftIcon className="w-5 h-5" />}
        </button>
        <a href="#" className="text-xs text-blue-400 hover:underline self-start ml-2">View status</a>
      </div>
    </aside>
  );
};

export default Sidebar; 