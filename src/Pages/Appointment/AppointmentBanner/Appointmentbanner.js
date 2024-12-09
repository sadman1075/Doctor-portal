import React from 'react';
import chair from '../../../assets/images/chair.png';
import bg from '../../../assets/images/bg.png';

import { DayPicker } from 'react-day-picker';

const Appointmentbanner = ({setselectedDate,selectedDate}) => {
    return (
        <div >


            <div className="hero">
                <img src={bg} alt='' className='hidden lg:block  lg:-mt-56'></img>
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <img src={chair} alt='' className='lg:w-1/3 lg:ml-20' />
                    <div className='mt-4' >
                        <DayPicker

                            mode='single'
                            selected={selectedDate}
                            onSelect={setselectedDate}

                        ></DayPicker>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Appointmentbanner;