// Dashboard.js
import React, { useState } from 'react';
import Sidebar from '../molecules/sidebar';
import MainContent from '../molecules/MainContent';
import Header from '../molecules/Header';

const Dashboard = () => {

    return (
        <>
            <div className='w-full flex'>
                <Sidebar />
                <div className='grow'>
                <MainContent />
                </div>
            </div>
        </>
    );
};


export default Dashboard;
