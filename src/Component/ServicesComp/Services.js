import React from 'react'
import "./Services.css"
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Services = () => {
    return (
        <div className='container'>
            <div className="ser-con">
                <div className='Sertrack flex-column-center'>
                    <TbTruckDelivery className='iconsz' />
                    <h3>Super Fast and Free Delivery</h3>
                </div>
                <div className='Sertrack Sertrackcol sermid  '>
                    <div className='sermidcs serpad' >
                        <GiReceiveMoney className='iconsz' />
                        <h3>Non Contact Shipping</h3>
                    </div>
                    <div className='sermidcs serpad' >  <MdOutlineSecurity className='iconsz' />
                        <h3>Money-back Guaranteed</h3></div>
                </div>
                <div className='Sertrack flex-column-center'>
                    <RiSecurePaymentLine className='iconsz' />
                    <h3>Super Secure Payment System</h3>
                </div>

            </div>
        </div>
    )
}

export default Services
