import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import toast from 'react-hot-toast';

const AddDoctor = () => {
    const imagehostkey = process.env.REACT_APP_img_key;
    console.log(imagehostkey);


    const { data: specialtyes, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => fetch('https://doctors-portal-server-bay-nine.vercel.app/appointmentSpecialty')
            .then(res => res.json())



    })
    if (isLoading) {
        return <Loading></Loading>
    }


    const handleDoctor = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const specialty = form.specialty.value;
        const photo = form.photo.value;
        const doctor = {
            name: name,
            email: email,
            specialty: specialty,
            photo: photo
        }

        fetch('https://doctors-portal-server-bay-nine.vercel.app/doctors', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(doctor)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Doctor Added Successfully')
                    form.reset()
                }
            })
    }
    return (
        <div>
            <div className=''>
                <form className="card-body lg:w-1/2 mx-auto" onSubmit={handleDoctor}>
                    <h1 className='text-center text-3xl font-semibold'>Add A Doctor</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Specialty</span>
                        </label>
                        <select className="select select-bordered" name='specialty'>
                            <option disabled selected>Pick A Specialty</option>

                            {
                                specialtyes.map(specialty => <option>
                                    {specialty.name}
                                </option>)
                            }
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="file" name='photo' className="file-input file-input-bordered " />
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn  bg-accent text-white ">ADD DOCTOR</button>
                    </div>
                    <div>
                        <p className='text-center'>
                            <p className='text-center mt-4'>----------OR----------</p>
                        </p>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn  bg-white text-black border-solid border-2 border-black ">CONTINUE WITH GOOGLE</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;