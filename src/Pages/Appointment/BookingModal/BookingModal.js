import { format } from 'date-fns';
import React, { useContext } from 'react';

import { AuthContext } from '../../../Context/Context';
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';


const BookingModal = ({ treatment, settreatment, selectedDate, refetch }) => {
    const date = format(selectedDate, "PP")
    const { name, slots, price } = treatment;
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const PatientName = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const booking = {
            AppointmentDate: date,
            treatment: name,
            patient: PatientName,
            slot,
            email,
            phone,
            price,
        }

        console.log(booking)

        fetch('https://doctors-portal-server-bay-nine.vercel.app/bookings', {
            method: 'post',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    settreatment(null)
                    toast.success('Your Booking Successfully.Go For Payment Also You can Pay by Cash')
                    navigate('/myappointment')
                    refetch();
                }
                else {
                    toast.error(data.message)
                }

            })







    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <h3 className="font-bold text-black text-xl">{name}</h3>
                    <form className='grid grid-cols-1 gap-4 mt-8' onSubmit={handleBooking}>
                        <input type="text" readOnly placeholder={date} className=" input input-bordered w-full " />
                        <select name='slot' className="select select-bordered w-full " required>
                            <option selected >{slots[0]}</option>
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }

                        </select>
                        <input type="text" name='name' defaultValue={user?.displayName} readOnly placeholder="Enter Your Name" className="input input-bordered w-full " required />
                        <input type="email" name='email' defaultValue={user?.email} readOnly placeholder="Enter Your Email" className="input input-bordered w-full " required />
                        <input type="text" defaultValue={`Price: ${price} $`} readOnly className="input input-bordered w-full " required />
                        <input type="text" name='phone' placeholder="Enter Your Phone Number" className="input input-bordered w-full " required />
                        <input type="submit" value="Submit" className="input input-bordered w-full bg-accent text-white " />

                    </form>
                    <div className="modal-action">
                        <label htmlFor="booking-modal" className="btn">Close!</label>
                    </div>
                </div>
            </div>

        </>
    );
};

export default BookingModal;