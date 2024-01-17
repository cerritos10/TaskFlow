// Sidebar.js
import React from 'react';

const Sidebar = ({ isVisible }) => {
    const sidebarClasses = `bg-gray-800 text-white h-screen w-64 p-4 transition-all ${isVisible ? 'translate-x-0' : '-translate-x-64'}`;

    return (
        <div className={sidebarClasses}>
            <ul>
                <li className="mb-2">Enlace 1</li>
                <li className="mb-2">Enlace 2</li>
                <li className="mb-2">Enlace 3</li>
            </ul>
        </div>
    );
};

export default Sidebar;
