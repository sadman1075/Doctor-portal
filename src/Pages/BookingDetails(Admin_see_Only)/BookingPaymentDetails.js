import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../Shared/Loading/Loading';

const BookingPaymentDetails = () => {
    const { data: allpayments, isLoading } = useQuery({
        queryKey: ['allpayments'],
        queryFn: async () => fetch('https://doctors-portal-server-bay-nine.vercel.app/allpayments')
            .then(res => res.json())
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-3xl mb-5'>All Payment Details:{allpayments.length}</h1>

            <div className="overflow-x-auto ">
                <table className="table">
                    {/* head */}
                    <thead>

                        <th>Index</th>
                        <th>name</th>
                        <th>Email</th>
                        <th>Phone No</th>
                        <th>Service</th>
                        <th>Price</th>
                        <th>Booking Id</th>
                        <th>Transaction Id</th>





                    </thead>
                    <tbody>
                        {
                            allpayments.map((allpayment, i) => <tr>
                                <th>{i + 1}</th>
                                <td>{allpayment.patient}</td>
                                <td>{allpayment.email}</td>
                                <td>{allpayment.phone}</td>
                                <td>{allpayment.treatment}</td>

                                <td>{allpayment.price}</td>
                                <td>{allpayment.bookingId}</td>
                                <td>{allpayment.trangectionid}</td>

                            </tr>)
                        }




                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default BookingPaymentDetails;