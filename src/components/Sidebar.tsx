interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <div className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white p-5 shadow-lg transition-transform duration-300 ${
      isOpen ? 'translate-x-0' : 'translate-x-full'
    } lg:translate-x-0`}>
      <ul>
        <li className="p-3 hover:bg-gray-700">🏠 Dashboard</li>
        <li className="p-3 hover:bg-gray-700">📂 Projects</li>
        <li className="p-3 hover:bg-gray-700">📊 Reports</li>
        <li className="p-3 hover:bg-gray-700">⚙ Settings</li>
        <li className="p-3 hover:bg-gray-700">🚪 Logout</li>
      </ul>
    </div>
  );
};

export default Sidebar;
