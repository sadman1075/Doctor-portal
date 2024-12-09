import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Loading from '../Shared/Loading/Loading';
import UserConfrimationModal from '../Shared/ConfrimationModal/UserConfirmationModal'

import toast from 'react-hot-toast';

const AllUsers = () => {

    const [deletinguser, setdeletinguser] = useState([])
    const closemodal = () => {
        setdeletinguser(null)
    }

    const handleuser = (users) => {
        fetch(`https://doctors-portal-server-bay-nine.vercel.app/users/${users._id}`, {
            method: 'delete',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    refetch()
                    toast.success(`User ${deletinguser.name} Deleted Successfully`)
                }

            })
    }

    const { data: users, isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => fetch('https://doctors-portal-server-bay-nine.vercel.app/users')
            .then(res => res.json())
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    const handleAdmin = id => {
        fetch(`https://doctors-portal-server-bay-nine.vercel.app/users/admin/${id}`, {
            method: "put",
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success("Make Admin Successful")
                    refetch();
                }
            })

    }
    return (
        <div>
            <h1 className='text-3xl mb-5'>Manage Users:{users?.length}</h1>

            <div className="overflow-x-auto ">
                <table className="table">
                    {/* head */}
                    <thead>

                        <th>Index</th>
                        <th>Name</th>
                        <th>specialty</th>
                        <th>Role</th>

                        <th >Action</th>


                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td >{
                                    user?.role !== 'admin' &&
                                    <button onClick={() => handleAdmin(user._id)} className='btn bg-secondary '>Make Admin</button>
                                }
                                    {
                                        user?.role === 'admin' &&
                                        <span className='text-primary font-bold  '>Admin</span>
                                    }
                                </td>
                                <td >

                                    <label onClick={() => setdeletinguser(user)} htmlFor="user_confrimation_modal" className="btn  bg-red-600 text-white">Delete</label>

                                </td>

                            </tr>)
                        }



                    </tbody>
                </table>
            </div>
            {
                deletinguser && <UserConfrimationModal
                    title={`Are You Sure You Want to Delete?`}
                    message={`If You Delete ${deletinguser.name} .It cannot be undone `}
                    closemodal={closemodal}
                    successaction={handleuser}
                    modaldata={deletinguser}
                ></UserConfrimationModal>
            }
        </div>
    );
};

export default AllUsers;