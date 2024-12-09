import { Link, Outlet } from "react-router-dom";

import React from 'react';

const Sidebar = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side mt-16 lg:mt-0">
                    <label htmlFor="dashboard-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-100 text-base-content">
                        {/* Sidebar content here */}
                        <li className="mb-2"><Link to='/dashboard'>Manage Users</Link></li>
                        <li className="mb-2" ><Link to='/dashboard/adddoctor'>Add A Doctor</Link></li>
                        <li className="mb-2"><Link to='/dashboard/managedoctors'>Manage Doctors</Link></li>
                        <li className="mb-2"><Link to='/dashboard/bookings'>Booking Details</Link></li>
                        <li className="mb-2"><Link to='/dashboard/payments'>Payment Details</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Sidebar;