import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom'
import Footer from '../Pages/Shared/Footer/Footer';
import Sidebar from '../Pages/Shared/Sidebar/Sidebar';
const Dashboardlayout = () => {
    return (
        <div>
            <Header></Header>
            <Sidebar></Sidebar>
   
        </div>
    );
};

export default Dashboardlayout;