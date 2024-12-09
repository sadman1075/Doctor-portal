import React from 'react';
import Banner from '../Banner/Banner';
import InfoCard from '../Infocard/InfoCard';
import Services from '../Services/Services';
import AppointmentCard from '../AppointmentCard/AppointmentCard';
import Testimonial from '../Testimonial/Testimonial';
import ContactUs from '../ContactUs/ContactUs';


const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCard></InfoCard>
            <Services></Services>
            <AppointmentCard></AppointmentCard>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;