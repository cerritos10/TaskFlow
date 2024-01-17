// Sidebar.js
import React from 'react';

const Sidebar = ({ isVisible }) => {
    return (
      <div className={`bg-daisy-bush-950 text-white h-screen w-72 p-4 ${isVisible ? 'sidebar-enter sidebar-enter-active' : 'sidebar-leave sidebar-leave-active'}`}>
        <ul>
          <li className="mb-2">Enlace 1</li>
          <li className="mb-2">Enlace 2</li>
          <li className="mb-2">Enlace 3</li>
        </ul>
      </div>
    );
  };
  

export default Sidebar;
