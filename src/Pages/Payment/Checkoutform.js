import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const Checkoutform = ({ booking }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [carderror, setcarderror] = useState(false)
    const { price, patient, email, _id, phone, slot, treatment, AppointmentDate } = booking;
    const [clientSecret, setclientSecret] = useState('')
    const [success, setsuccess] = useState('')
    const [trangectionid, settrangectionid] = useState('')
    const [loading, setloading] = useState(false)
    useEffect(() => {
        fetch('https://doctors-portal-server-bay-nine.vercel.app/create-payment-intent', {
            method: 'post',
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then((data) => setclientSecret(data.clientSecret))
    }, [price])


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement)

        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            setcarderror(error.message)
        }
        else {
            setcarderror('')
        }
        setsuccess('')
        setloading(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patient,
                        email: email,
                    },
                },
            },
        );
        if (confirmError) {
            setcarderror(confirmError.message)
            return;
        }
        console.log(paymentIntent)
        if (paymentIntent.status === 'succeeded') {


            const payment = {
                price,
                trangectionid: paymentIntent.id,
                email,
                patient: patient,
                bookingId: _id,
                phone: phone,
                treatment: treatment,

            }
            fetch('https://doctors-portal-server-bay-nine.vercel.app/payments', {
                method: 'post',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        console.log(data)
                        settrangectionid(paymentIntent.id)
                        setsuccess(`Congrats! Your Payment is successfull. Your Tranzaction id is:`)
                        setloading(false)

                    }
                })


        }



    }
    return (
        <div className=''>

            <label className="input input-bordered flex items-center gap-2 mb-2">
                Name:
                <input type="text" className="" readOnly defaultValue={patient} />
            </label>
            <label className="input input-bordered flex items-center gap-2 mb-2">
                Email:
                <input type="text" className="grow" readOnly defaultValue={email} />
            </label>
            <label className="input input-bordered flex items-center gap-2 mb-2">
                Phone No:
                <input type="text" className="" readOnly defaultValue={phone} />
            </label>
            <label className="input input-bordered flex items-center gap-2 mb-2">
                Treatment:
                <input type="text" className="grow" readOnly defaultValue={treatment} />
            </label>
            <label className="input input-bordered flex items-center gap-2 mb-2">
                Appointment Date:
                <input type="text" className="" readOnly defaultValue={AppointmentDate} />
            </label>
            <label className="input input-bordered flex items-center gap-2 mb-2">
                Appointment Time:
                <input type="text" className="grow" readOnly defaultValue={slot} />
            </label>
            <label className="input input-bordered flex items-center gap-2 mb-6">
                Payable:
                <input type="text" className="grow" readOnly defaultValue={`${price} $`} />
            </label>



            <form onSubmit={handleSubmit} className=''>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className='mt-4'>
                    <p className='text-red-600'>{carderror}</p>
                </div>
                <button type="submit" disabled={!stripe || !clientSecret || loading} className='btn btn-secondary  text-white mt-4'>
                    Pay
                </button>

            </form>
            {
                success && <div>
                    <p className='text-green-600'>{success}{trangectionid}</p>
                </div>
            }
        </div>
    );
};

export default Checkoutform;