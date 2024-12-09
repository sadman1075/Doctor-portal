import React from 'react';
import testimonial from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {

    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
            image: people1


        },
        {
            _id: 1,
            name: 'Winson Herry',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
            image: people2


        },
        {
            _id: 1,
            name: 'Winson Herry',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
            image: people3


        }

    ]
    return (
        <section>
            <div className='mt-20 flex justify-between'>
                <div>
                    <p className='text-secondary text-xl font-bold'>Testimonial</p>
                    <p className='text-4xl'>What Our Patient Says</p>
                </div>
                <div>
                    <img src={testimonial} className='w-24 lg:w-48' alt="" />
                </div>


            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review => <TestimonialCard
                        key={review._id}
                        review={review}
                    ></TestimonialCard>)
                }
            </div>
        </section>
    );
};

export default Testimonial;