import { format } from 'date-fns';
import React, { useState } from 'react';
import AvailableAppointmentCard from './AvailableAppointmentCard';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';


const AvailableAppointment = ({ selectedDate }) => {
    const [treatment, settreatment] = useState(null)
    const date = format(selectedDate, 'PP')


    const { data: appointments = [], refetch, isLoading } = useQuery({
        queryKey: ['appointments', date],
        queryFn: () => fetch(`https://doctors-portal-server-bay-nine.vercel.app/appointmentoptions?date=${date}`)
            .then(res => res.json())
    });
    if (isLoading) {
        return <Loading></Loading>
    }

    // useEffect(() => {
    //     fetch(`https://doctors-portal-server-bay-nine.vercel.app/appointmentoptions?date=${date}`)
    //         .then(res => res.json())
    //         .then(data => setappointments(data))
    // }, [date])
    return (
        <section>
            <div className='my-16'>
                <p className='text-center text-secondary text-xl font-semibold'>Available Appointments on {format(selectedDate, "PP")} </p>
                <p className='text-center text-xl mt-2'>Please select a Service</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    appointments.map(appointment => <AvailableAppointmentCard key={appointment._id} appointment={appointment} settreatment={settreatment}></AvailableAppointmentCard>)
                }
            </div>

            {
                treatment &&
                <BookingModal treatment={treatment} settreatment={settreatment} selectedDate={selectedDate} refetch={refetch}></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointment;