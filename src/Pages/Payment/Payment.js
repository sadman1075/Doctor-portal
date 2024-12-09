import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Checkoutform from './Checkoutform';
const stripePromise = loadStripe(process.env.REACT_APP_STRIPTE_key);

const Payment = () => {
    const booking = useLoaderData();
    const { treatment, price, slot, AppointmentDate } = booking
    return (
        <div>
            <h1 className='text-4xl text-center'>Payment For This Service</h1>

            <div className='w-96 mt-10 text-center mx-auto'>

                <Elements stripe={stripePromise}>
                    <Checkoutform 
                    booking={booking}>

                    </Checkoutform>

                </Elements>
            </div>
        </div>
    );
};

export default Payment;