import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading/Loading';
import ConfrimationModal from '../Shared/ConfrimationModal/ConfrimationModal';
import toast from 'react-hot-toast';

const ManageDoctors = () => {

    const [deleteingdoctors, setdeleteingdoctors] = useState([])
    const closemodal = () => {
        setdeleteingdoctors(null);
    }
    const handledoctor = doctors => {
        fetch(`https://doctors-portal-server-bay-nine.vercel.app/doctors/${doctors._id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch()
                refetch()
                toast.success(`Doctor ${doctors.name} deleted succssfully`)
            })
    }

    const { data: doctors, isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => fetch('https://doctors-portal-server-bay-nine.vercel.app/doctors')
            .then(res => res.json())

    })

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h1 className='text-3xl mb-5'>Manage Doctors:{doctors?.length}</h1>

            <div className="overflow-x-auto ">
                <table className="table">
                    {/* head */}
                    <thead>

                        <th>Index</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>specialty</th>
                        <th >Action</th>


                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, i) => <tr>
                                <th>{i + 1}</th>
                                <td>{doctor.name}</td>
                                <td>{doctor.email}</td>

                                <td>{doctor.specialty}</td>
                                <td >
                                    <label onClick={() => setdeleteingdoctors(doctor)} htmlFor="confrimation_modal" className="btn  bg-red-600 text-white">Delete</label>

                                </td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deleteingdoctors && <ConfrimationModal

                    title={`Are You Sure You Want To Delete ? `}
                    message={`If You Delete ${deleteingdoctors.name} .It Cannot be undone `}
                    closemodal={closemodal}
                    successaction={handledoctor}
                    modaldata={deleteingdoctors}

                > </ConfrimationModal>
            }
        </div>
    );
};

export default ManageDoctors;