import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/Context';
import { useQuery } from '@tanstack/react-query';

const Header = () => {
    const { Logout } = useContext(AuthContext)
    const handlelogout = () => {
        Logout();
    }
    const { user } = useContext(AuthContext)
    console.log(user)



    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/appointment'>Appointment</Link></li>
        <li><Link to='/about'>About</Link></li>
        
        

        {
            user?.uid ?
                <>
                    <li><Link to='/myappointment'>My Appointments</Link></li>
                    <li><button onClick={handlelogout}>Logout</button></li>

                </>
                :
                <li><Link to='/login'>Login</Link></li>



        }
        <li><Link to='/dashboard'>Admin</Link></li>
    
      


    </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost  lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={1} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost text-xl">Doctors Portal</Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            menuItems
                        }
                    </ul>
                </div>
                <label tabIndex={2} htmlFor="dashboard-drawer" role="button" className="btn btn-ghost navbar-end mr-6  lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>


        </div>
    );
};

export default Header;