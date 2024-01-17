// Dashboard.js
import React, { useState } from 'react';
import Sidebar from '../molecules/sidebar';
import MainContent from '../molecules/MainContent';

const Dashboard = () => {
    const [sidebarVisible, setSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    return (
        <div className={`flex h-screen overflow-hidden transition-transform transform ${sidebarVisible ? 'translate-x-0' : '-translate-x-64'}`}>
            <div>
                <Sidebar isVisible={sidebarVisible} />
            </div>

            {/* Contenido Principal */}
            <div className="flex-1">
                <button onClick={toggleSidebar} className="toggle-button">
                    {sidebarVisible ? 'Ocultar Sidebar' : 'Mostrar Sidebar'}
                </button>
                <MainContent/>
            </div>
        </div>
    );
};


export default Dashboard;
