import React, { useState } from 'react';
import './index.css';
import Sidebar from './Pages/Sidebar/Sidebar';
import Home from './Pages/1Home/Home';

function Body() {
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  return (
    <main>
      <Sidebar isActive={isSidebarActive} setIsActive={setIsSidebarActive} />
      <Home setIsSidebarActive={setIsSidebarActive} />
    </main>
  );
}

export default Body;
