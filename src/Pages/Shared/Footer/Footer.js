import React from 'react';
import footer from '../../../assets/images/footer.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section className='mt-20 ' style={{
             background: `url(${footer})  `,
             backgroundSize:'cover'
         }}>
            <footer className=" p-10 lg:ml-52">
                <div>
                    <div className='footer'>
                    <nav>
                    <h6 className="footer-title">Services</h6>
                    <Link className="link link-hover">Branding</Link>
                    <Link className="link link-hover">Design</Link>
                    <Link className="link link-hover">Marketing</Link>
                    <Link className="link link-hover">Advertisement</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <Link className="link link-hover">About us</Link>
                    <Link className="link link-hover">Contact</Link>
                    <Link className="link link-hover">Jobs</Link>
                    <Link className="link link-hover">Press kit</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <Link className="link link-hover">Terms of use</Link>
                    <Link className="link link-hover">Privacy policy</Link>
                    <Link className="link link-hover">Cookie policy</Link>
                </nav>
                    </div>

                    <p className='text-center mt-20 lg:mt-32'>Copyright © 2024 - All right reserved by Sadman Shakib</p>

                </div>
            </footer>

        </section>
    );
};

export default Footer;