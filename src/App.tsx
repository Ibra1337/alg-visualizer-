import React, { useState } from 'react';
import Topbar from './components/Tobar';
import Sidebar from './components/Sidebar';
import HomePage from './Homepage';
import BubbleSortVisualizer from './BubbleSortVisualizer';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
   
     
   

        <Topbar title="Algorithm Visualizers" onToggleSidebar={toggleSidebar} />

      
        
  <HomePage />
  <BubbleSortVisualizer />

    </div>
  );
}

export default App;
