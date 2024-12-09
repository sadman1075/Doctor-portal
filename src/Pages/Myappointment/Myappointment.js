import React, { useContext } from 'react';
import { AuthContext } from '../../Context/Context';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Shared/Loading/Loading';
import { Link } from 'react-router-dom';

const Myappointment = () => {
    const { user } = useContext(AuthContext)
    const url = `https://doctors-portal-server-bay-nine.vercel.app/bookings?email=${user?.email}`;
    const { data: bookings, isLoading } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }

    })
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-3xl mb-5'>My Appointments</h1>

            <div className="overflow-x-auto ">
                <table className="table">
                    {/* head */}
                    <thead>

                        <th>Index</th>
                        <th>Name</th>
                        <th>Treatment</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Payment</th>




                    </thead>
                    <tbody>
                        {
                            bookings.map((booking, i) => <tr>
                                <th>{i + 1}</th>
                                <td>{booking.patient}</td>
                                <td>{booking.treatment}</td>
                                <td>{booking.AppointmentDate}</td>
                                <td>{booking.slot}</td>
                                <td>
                                    {
                                        booking.price && !booking.paid && <Link to={`/payment/${booking._id}`}>
                                            <button className='btn bg-secondary'>
                                                Pay
                                            </button>
                                        </Link>
                                    }
                                    {
                                        booking.price && booking.paid && <span className=' text-secondary font-semibold'>
                                            Paid
                                        </span>
                                    }

                                </td>
                            </tr>)
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Myappointment;