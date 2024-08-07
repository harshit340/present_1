"use client";
import React, { useState } from 'react';
import '../style/NavBar.css'; // Import the external CSS file
import { SideBar } from './Drawer';

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
   <>
   <div className='atmax'>
          <div className='left-nav'>
          <div>PayOn</div>
            <span className='header-nav'>Home</span>
            <span className='header-nav'>How to use</span>
            </div>
   </div>

   
   <div className='atmin' >
   <div className='nav-ini'>
          <div>PayOn</div>
          <SideBar/>
        </div>
   </div>
   </>
  );
}


