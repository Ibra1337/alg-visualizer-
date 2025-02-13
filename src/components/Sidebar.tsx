import { useState } from "react";
import { Menu, X } from "lucide-react";

const Sidebar = () => {

  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <>

      <button
        className="fixed top-4 right-4 z-50 p-2 bg-gray-800 text-white rounded-md lg:hidden"
        onClick={() => setIsOpen(!isOpen)} 
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>


      <div
        className={`fixed top-10 right-0 h-full w-64 bg-gray-900 text-white p-5 shadow-lg transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } lg:translate-x-0`}
      >
        <h2 className="text-xl font-semibold mb-4">Sidebar Menu</h2>
        <ul className="space-y-3">
          <li className="border-2 p-2 rounded-lg hover:bg-gray-700 cursor-pointer">🏠 Dashboard</li>
          <li className="border-2 p-2 rounded-lg hover:bg-gray-700 cursor-pointer">📁 Projects</li>
          <li className="border-2 p-2 rounded-lg hover:bg-gray-700 cursor-pointer">📊 Reports</li>
          <li className="border-2 p-2 rounded-lg hover:bg-gray-700 cursor-pointer">⚙️ Settings</li>
          <li className="border-2 p-2 rounded-lg hover:bg-gray-700 cursor-pointer">🚪 Logout</li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
