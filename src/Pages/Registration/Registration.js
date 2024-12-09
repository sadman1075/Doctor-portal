import React, { useContext, useState } from 'react';
import { Link,  useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/Context';
import { toast } from 'react-hot-toast'

const Registration = () => {
    const { CreateUser, updateuser } = useContext(AuthContext)
    const navigate = useNavigate();
    const [passworderror, setpassworderror] = useState(false)

    const handleRegistration = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        if (!/(?=.*?[A-Z])/.test(password)) {
            return setpassworderror('At least one upper case English letter')
        }
        if (!/(?=.*?[a-z])/.test(password)) {
            return setpassworderror('At least one lower case English letter')
        }
        if (!/(?=.*?[0-9])/.test(password)) {
            return setpassworderror('At least one digit')
        }
        if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
            return setpassworderror('At least one special character')
        }
        if (!/.{8,}/.test(password)) {
            return setpassworderror('Minimum eight in length')
        }
        setpassworderror('')
        CreateUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success('user created successfully')
                navigate('/')

                const userInfo = {
                    displayName: name,
                }
                updateuser(userInfo)
                    .then(() => {
                        saveuser(name, email);


                    })
                    .catch(err => console.log(err))
                form.reset()

            })
            .catch(err => {
                console.log(err)
            })


        const saveuser = (name, email) => {
            const users = { name, email }
            fetch('https://doctors-portal-server-bay-nine.vercel.app/users', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(users)
            })
                .then(res => res.json())
                .then(data => { console.log(data) })
        }

    }
    return (
        <div className='mt-12'>
            <form className="card-body lg:w-1/3 mx-auto" onSubmit={handleRegistration}>
                <h1 className='text-center text-3xl font-semibold'>Sing Up</h1>
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
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" name='password' className="input input-bordered" required />

                </div>
                <div>
                    <p className='text-red-600 text-center'>{passworderror}</p>
                </div>
                <div className="form-control mt-6">
                    <button className="btn  bg-accent text-white ">SINGUP</button>
                </div>
                <div>
                    <p className='text-center'>
                        Already Have An Account? <Link to='/login' className='text-secondary '>Login</Link>
                        <p className='text-center mt-4'>----------OR----------</p>
                    </p>
                </div>
                <div className="form-control mt-6">
                    <button className="btn  bg-white text-black border-solid border-2 border-black ">CONTINUE WITH GOOGLE</button>
                </div>
            </form>
        </div>
    );
};

export default Registration;