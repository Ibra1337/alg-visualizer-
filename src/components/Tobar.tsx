import React from 'react';


interface TopBarProps {
  title: string;
}

const Topbar: React.FC<TopBarProps> = ({ title }) => {
  return (
    <div className="fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-gray-800 text-white z-50">
      
      <div className="flex items-center">
        <h1 className="text-2xl font-semibold">{title}</h1>
      </div>


      <div className="flex items-center">
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
    </div>
  );
};

export default Topbar;
