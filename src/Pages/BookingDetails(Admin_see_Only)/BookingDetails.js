import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../Shared/Loading/Loading';

const BookingDetails = () => {

    const { data: allbookings, isLoading } = useQuery({
        queryKey: ['allbookings'],
        queryFn: async () => fetch('https://doctors-portal-server-bay-nine.vercel.app/allbookings')
            .then(res => res.json())
    })
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1 className='text-3xl mb-5'>All Bookings Details:{allbookings.length}</h1>

            <div className="overflow-x-auto ">
                <table className="table">
                    {/* head */}
                    <thead>

                        <th>Index</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone No</th>
                        <th>Treatment</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Price</th>
                        <th>Action</th>




                    </thead>
                    <tbody>
                        {
                            allbookings.map((allbooking, i) => <tr>
                                <th>{i + 1}</th>
                                <td>{allbooking.patient}</td>
                                <td>{allbooking.email}</td>
                                <td>{allbooking.phone}</td>
                                <td>{allbooking.treatment}</td>
                                <td>{allbooking.AppointmentDate}</td>
                                <td>{allbooking.slot}</td>
                                <td>{allbooking.price}</td>
                                {
                                    allbooking?.paid ?
                                        <td className='text-green-600 font-semibold'>Paid</td> :
                                        <td className='text-red-600 font-semibold'>Not Paid</td>

                                }

                            </tr>)
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BookingDetails;