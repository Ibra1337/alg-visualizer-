import React from 'react';
import { Menu } from 'lucide-react'; // Importing an icon for the button

interface TopBarProps {
  title: string;
  onToggleSidebar: () => void; // Function to toggle sidebar
}

const Topbar: React.FC<TopBarProps> = ({ title, onToggleSidebar }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-16 flex justify-between items-center p-4 bg-gray-800 text-white z-50 shadow-md">
      {/* Sidebar Toggle Button */}
      <button 
        onClick={onToggleSidebar} 
        className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <Menu size={24} />
      </button>

      {/* Title */}
      <h1 className="text-2xl font-semibold">{title}</h1>

      {/* Navigation Links */}
      <nav>
        <ul className="flex space-x-6">
          <li>
            <a href="#" className="text-white text-lg hover:text-blue-400">Home</a>
          </li>
          <li>
            <a href="#" className="text-white text-lg hover:text-blue-400">About</a>
          </li>
          <li>
            <a href="#" className="text-white text-lg hover:text-blue-400">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Topbar;
