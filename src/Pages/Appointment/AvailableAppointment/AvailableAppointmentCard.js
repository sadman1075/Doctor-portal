import React from 'react';


const AvailableAppointmentCard = ({ appointment,settreatment }) => {
    const { name, slots,price } = appointment
    return (
        <div>
            <div className=" card w-96 bg-base-100 shadow-xl">
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-secondary">{name}</h2>
                    <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                    <p>{slots.length} spaces Available</p>
                    <p>Price: {price} $</p>
                    <div className="card-actions justify-end">

                        <label onClick={()=>settreatment(appointment)} htmlFor="booking-modal" className="btn btn-primary text-white">Book Appointment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvailableAppointmentCard;