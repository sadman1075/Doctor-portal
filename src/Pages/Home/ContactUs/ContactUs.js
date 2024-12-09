import React from 'react';
import appointment from '../../../assets/images/appointment.png'

const ContactUs = () => {

    const handlecontract=event=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const subject=form.subject.value;
        const textarea=form.textarea.value;
      const contact={
        email:email,
        subject:subject,
        textarea:textarea
      }
console.log(contact)
 fetch('https://doctors-portal-server-bay-nine.vercel.app/contact',{
    method:'POST',
    headers:{
        "content-type":"application/json"
    },
    body:JSON.stringify(contact)
 })
 .then(res=>res.json())
 .then(data=>console.log(data))

   
    }

    return (
        <div className='mt-20' style={{background:`url(${appointment})`}}>
            <div className='text-center p-8'>
                <p className='text-secondary text-xl font-bold'>Contact Us</p>
                <p className='text-4xl text-white'>Stay Connected with Us</p>
            </div>

            <form className="card-body w-full lg:w-1/2 mx-auto" onSubmit={handlecontract}>
                <div className="form-control">

                    <input type="email" name='email' placeholder="Email Address" className="input input-bordered" required />
                </div>
                <div className="form-control">

                    <input type="text" name='subject' placeholder="Subject" className="input input-bordered" required />

                </div>
                <div>
                <textarea placeholder="Your Message" name='textarea' className="textarea textarea-bordered textarea-lg w-full max-w-1/2" ></textarea>

                </div>
                <div className="text-center">
                    <button className="btn btn-secondary text-white">Submit</button>
                </div>
            </form>

        </div>
    );
};

export default ContactUs;