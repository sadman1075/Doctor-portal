import React, { useContext, useState } from 'react';
import { Link ,useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/Context';


const Login = () => {
    const {Login}=useContext(AuthContext)
    const [error,seterror]=useState(false)
    const navigate=useNavigate()
    const location=useLocation();
    const from=location.state?.from?.pathname || '/';
    const handleLogin=(event)=>{

        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password)
        Login(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user)
            seterror(false)
            navigate(from,{replace:true})
        })
        .catch(err=>{
            seterror("Your Email/Password is Incorrect")
        })




    }
    return (
        <div className='mt-12'>
            <form className="card-body lg:w-1/3 mx-auto" onSubmit={handleLogin}>
                <h1 className='text-center text-3xl font-semibold'>LogIn</h1>
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
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <p className='text-center text-red-600 '>{error}</p>
                <div className="form-control mt-6">
                    <button className="btn  bg-accent text-white ">LOGIN</button>
                </div>
                <div>
                    <p className='text-center'>
                        New to Doctors Portal? <Link to='/registration' className='text-secondary '>Create New Account</Link>
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

export default Login;