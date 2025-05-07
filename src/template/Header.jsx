import React from 'react'
import { Link } from 'react-router-dom'
import bike from '../assets/bike.png'

function Header() {
    return (
        <div className="d-flex align-items-center justify-content-between">
          {/* Left: Logo + Title */}
          <Link to="/home" className="d-flex align-items-center text-white text-decoration-none">
            <img src={bike} alt="Bike Logo" width="40" height="40" className="me-2" />
            <h5 className="m-0">Bike Finance</h5>
          </Link>
        <div>
          <Link className='btn btn-dark fs-5 me-2' to={'/aboutus'}>About-Us</Link>
          <Link className='btn btn-dark fs-5 me-2' to={'/contactus'}>Contact-Us</Link>
          <Link className='btn btn-dark fs-5 me-2' to={'/emicheck'} >Emi-Check</Link>
          <Link className='btn btn-dark fs-5 me-2' to={'/enquiry'} >Enquiry</Link>
          <Link className='btn btn-dark fs-5 me-2' to={'/login'} >Login</Link>
          <Link className='btn btn-dark fs-5 me-2' to={'/customer'} >Customer</Link>
        </div>
        </div>
      )
}

export default Header
