import React from 'react'
import "./Contact.css"
import { useAuth0 } from "@auth0/auth0-react";

const Contact = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    <div>
      <div className='container'>
        <h2 className='contTitle '>
          Feel Free To Contact Us
        </h2>
        <div >
          <iframe className="mapcon" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3810.568293539696!2d74.1194696!3d17.2397198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc184a1ea28b1a1%3A0xd29cb49c4b090c95!2sMahadev%20Temple!5e0!3m2!1sen!2sin!4v1669401198569!5m2!1sen!2sin" width="100%" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className=' cont-form '>
          <form className='conformwid  flex-column-center' action='https://formspree.io/f/meqdwlpe' method="POST">
            <input className='conformwid'
              value={isAuthenticated ? user.name : null}
              type={"text"} name="UserName" placeholder="Usernamer" required autoComplete='off'></input>

            <input className='conformwid'
              value={isAuthenticated ? user.email : null}
              type={"email"} name="Email" placeholder="Email" required autoComplete='off'></input>

            <textarea className='conformwid' name="Message" cols="30" rows="8" autoComplete='off' required placeholder='Enter your Message'> </textarea>
            {/* <button type='submit'></button> */}
            <input className='conformwid formbtn' type={"submit"} value="Submit"></input>


          </form>

        </div>

      </div>
    </div>
  )
}

export default Contact
