import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import BubbleSortVisualizer from './BubbleSortVisualizer'
import Sidebar from './components/Sidebar';
import HomePage from './Homepage';
import Topbar from './components/Tobar'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>

      <Topbar title='test' />
      <HomePage/>
      <Sidebar />
      <BubbleSortVisualizer />

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
