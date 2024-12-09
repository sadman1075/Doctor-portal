import React, { useEffect, useState } from 'react';

const UseAdminHokes = (email) => {
    const [isAdmin, setIsAdmin] = useState(false)
    const [isAdminLoading, setIsAdminLoading] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`https://doctors-portal-server-bay-nine.vercel.app/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {

                    setIsAdmin(data.isAdmin)
                    setIsAdminLoading(false)
                })
        }
    }, [email])

    return [isAdmin, isAdminLoading]

};

export default UseAdminHokes;