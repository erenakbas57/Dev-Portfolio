import React from 'react';
import './index.css';
import Sidebar from './Pages/Sidebar/Sidebar';
import Home from './Pages/1Home/Home';



function Body() {
  return (
    <main >
         <Sidebar/>
          <Home/>
    </main>
  );
}

export default Body;
