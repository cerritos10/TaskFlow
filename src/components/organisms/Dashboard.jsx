// Dashboard.js
import React, { useState } from 'react';
import Sidebar from '../molecules/sidebar';
import MainContent from '../molecules/MainContent';
import Header from '../molecules/Header';

const Dashboard = () => {
    const [sidebarVisible, setSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    return (
        <div className={`flex h-screen overflow-hidden transition-transform transform ${sidebarVisible ? 'translate-x-0' : '-translate-x-72'}`}>
            <div>
                <Sidebar isVisible={sidebarVisible} />
            </div>

            {/* Contenido Principal */}
            <div className="flex-1">
                <button onClick={toggleSidebar} className="toggle-button">
                    {sidebarVisible ? 'Ocultar Sidebar' : 'Mostrar Sidebar'}
                </button>

                <Header />
                <div className={`bg-daisy-bush-950 ${sidebarVisible ? 'w-full bg-daisy-bush-950' : 'w-full bg-daisy-bush-950'}`}>
                    <MainContent />
                </div>
            </div>
        </div>
    );
};


export default Dashboard;
