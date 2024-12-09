import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png';
import { Link } from 'react-router-dom';

const AppointmentCard = () => {
    return (
        <div className='mt-16 lg:mt-36' style={{background:`url(${appointment})`}}>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} className="-mt-40 hidden lg:block lg:w-1/2 rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-xl text-secondary font-bold">Appointment</h1>
                        <h1 className="text-4xl text-white font-bold">Make an appointment Today</h1>
                        <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <Link to='/appointment'><button className="btn btn-secondary text-white mt-3">Make Appointment</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentCard;