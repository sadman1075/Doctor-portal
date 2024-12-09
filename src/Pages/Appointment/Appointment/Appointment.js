import React, { useState } from 'react';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';
import Appointmentbanner from '../AppointmentBanner/Appointmentbanner';

const Appointment = () => {
    const [selectedDate, setselectedDate] = useState(new Date())

    return (
        <div>
            <Appointmentbanner selectedDate={selectedDate} setselectedDate={setselectedDate} ></Appointmentbanner>

            <AvailableAppointment selectedDate={selectedDate}></AvailableAppointment>
        </div>
    );
};

export default Appointment;