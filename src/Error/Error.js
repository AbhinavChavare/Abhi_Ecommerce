import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Error.css"

const Error = () => {

// useEffect(()=>{
//   alert("hii");
// })

  return (

    <div className='flex-column-center text-pad'>
    <div className='text-size-1'>404</div>
    <div className='text-size-2'>UHH OH! YOU'RE LOST.....</div>
    <h3>this page you are looking for does not exist.Please click the button below to go to the Home Page </h3>
<NavLink to="/">
    <button className='btnshow'>Go to Home page</button>
    </NavLink>
      </div>
  )
}

export default Error
