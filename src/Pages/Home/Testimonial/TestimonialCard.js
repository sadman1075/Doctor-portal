import React from 'react';

const TestimonialCard = ({review}) => {
    const {location,name,image}=review
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="">{review.review}</h2>
                    <div className='flex justify-evenly mt-8'>
                        
                            <div className="avatar w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={image} alt='' />
                            </div>
                        
                        <div className='items-center'>
                            <p className='text-xl'>{name }</p>
                            <p>{location }</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;