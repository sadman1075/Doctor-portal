import React from 'react';
import cavity from '../../../assets/images/cavity.png';
import fluride from '../../../assets/images/fluoride.png';
import whitening from '../../../assets/images/whitening.png';
import treatment from '../../../assets/images/treatment.png';

const Services = () => {
    return (
        <div>
            <div className='text-center my-8'>
                <p className='text-secondary font-bold'>OUR SERVICES</p>
                <p className='text-4xl'>Services we Provide</p>
            </div>

            <div className='lg:flex justify-evenly mt-8 my-16'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={fluride} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Fluoride Treatment</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>

                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={cavity} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Cavity Filling</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>

                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={whitening} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Teeth Whitening</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>

                    </div>
                </div>

            </div>

            <div className=''>

                <div className="hero ">
                    <div className="hero-content flex-col lg:flex-row ">
                        <img src={treatment} className="w-96 rounded-lg shadow-2xl lg:ml-36" alt='' />
                        <div className='lg:ml-20'>
                            <h1 className="text-5xl font-bold">Exceptional Dental</h1>
                            <h1 className="text-5xl font-bold"> Care, On Your Terms</h1>
                            <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iste minus nulla dolore odio odit! Veritatis repudiandae tempora impedit sequi ducimus magnam non, enim a cum facere fuga perferendis molestiae.</p>
                            <button className="btn btn-secondary text-white">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;