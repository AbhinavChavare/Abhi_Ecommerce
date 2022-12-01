import React from 'react'
import "./Footer.css"
import {  BsFacebook } from "react-icons/bs";
import {  FaInstagram } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
    return (
        <div>
            <section className='footcon'>
                <div className='footstart flex-center flex-spaeven'>
                    <div className='fot-start-con'>
                        <h3>Ready to get Started?</h3>
                        <h3>Talk to us Today</h3>
                    </div>
                    <div>
                        <button className='btnshow '>Get Started</button>
                    </div>
                </div>
                <div>
                    <div className='fot-sect-cent'>
                        <div className='fot-data-con'>
                            <h3>Abhinav Chavare</h3>
                            <h3>Enjoy millions of the latest Android apps, games, music, movies, TV, books, magazines & more. Anytime, anywhere, across your devices.</h3>
                        </div>
                        <div className='fot-data-con '>
                            <h3>Subscribe to get important Updates</h3>
                            <form >
                                <input className='form-mar form-in-text' type="text" placeholder='Enter your email'>
                                </input>
                                <button className='btnshow form-mar'>Get Started</button>
                            </form>
                        </div>
                        <div className='fot-data-con'>
                            <h3>Follow us</h3>
                            <div>
                                <span>
                                    <a href='https://www.instagram.com/abhi_9chavare/' target="_blank">
                                        <FaInstagram className='iconsz' /></a>
                                    <a href='https://www.facebook.com/abhinav.chavare.7/' target="_blank">
                                        <BsFacebook className='iconsz' /></a>
                                    <a href='https://www.linkedin.com/in/abhinav-chavare-3a8110112/' target="_blank"
                                    > 
                                        <AiFillLinkedin className='iconsz' /></a>
                                </span>
                            </div>
                        </div>
                        <div className='fot-data-con'>
                            <h3>Call Us</h3>
                            <h3 ><a className='text-col' href='tel:9921899345' > +91 9921899345</a>
                            </h3>
                        </div>


                    </div>
                </div>
                <div>
                    <hr style={{ color: "white" }} />
                    <div className='fot-down-flex'>
                        <div className='fot-down-flex-spb'>
                            <div className='fot-width'>
                                <h3>@ {new Date().getFullYear()} Abhinav Chavare,</h3>
                                <h3>All rights are reserved</h3>
                                <h3> Let's do Inversion {"<^>" }</h3>
                            </div ><div className='fot-width'>

                            <h3 >Privacy policy </h3>
                            <h3 >Terms and Conditions </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
