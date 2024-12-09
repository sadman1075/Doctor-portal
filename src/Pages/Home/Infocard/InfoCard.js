import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import phone from '../../../assets/icons/phone.svg';
import marker from '../../../assets/icons/marker.svg';


const InfoCard = () => {
    return (
        <div className='lg:flex justify-evenly my-16'>
            <div className="card w-96 bg-gradient-to-r from-primary to-secondary text-white mt-4">
                <div className='flex'>
                    <img className='ml-5' src={clock} alt="" />

                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Opening Hours</h2>
                        <p>8.00am - 10.00pm </p>
                    </div>
                </div>
            </div>

            <div className="card w-96 bg-neutral text-white mt-4">
                <div className='flex'>
                    <img className='ml-5' src={marker} alt="" />

                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Visit Our Location</h2>
                        <p>Kuril Kagibari,Dhaka 1229</p>
                    </div>
                </div>
            </div>

            <div className="card w-96 bg-gradient-to-r from-primary to-secondary text-white mt-4">
                <div className='flex'>
                    <img className='ml-5' src={phone} alt="" />

                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Contract Us Row</h2>
                        <p>+8801797506103</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default InfoCard;