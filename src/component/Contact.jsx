import React from 'react'
// import img from '../image/profile.png'
import { Link } from 'react-router-dom'
function Contact() {
  return (
    <div className="container-fluid contactback">
      <div className="container mt-5 ">
      <div className=' mt-5 pt-5 contactimg text-center text-white' >
       <h1 style={{fontFamily:"'Poppins', sans-serif"}}className='mt-5' >Hi! Let's Connect</h1>
      {/* <img src={img} alt="profileimg"  className='img-fluid'/> */}
    </div>
    <div className="row mt-5">
      <div className="col-md-4"></div>
      <div className="col-md-4 contactopt ">
 <Link to="https://www.linkedin.com/in/sakshi-shrivastava-a67b2924b/" className='nav-link' target='_blank'> <h2> <i class="fa-brands fa-linkedin-in"></i> <span className='text-center px-5 mx-5'>Linkedin</span>  </h2></Link>

     
      </div>
      <div className="col-md-4"></div>
    </div>
    {/* 1st row end */}
    <div className="row mt-3">
      <div className="col-md-4"></div>
      <div className="col-md-4 contactopt ">
 <Link to="mailto:shrivastavasakshi650@gmail.com" className='nav-link' target='_blank'> <h2> <i class="fa-solid fa-envelope"></i> <span className='text-center px-5 mx-5'>Mail</span>  </h2></Link>

     
      </div>
      <div className="col-md-4"></div>
    </div>
    {/* 2nd row end */}
    <div className="row mt-3">
      <div className="col-md-4"></div>
      <div className="col-md-4 contactopt ">
 <Link to="https://github.com/sakshi2k3" className='nav-link' target='_blank'> <h2><i class="fa-brands fa-github"></i> <span className='text-center px-5 mx-5'>Github</span>  </h2></Link>

     
      </div>
      <div className="col-md-4"></div>
    </div>
    {/* 3rd row end */}
    <div className="row mt-3">
      <div className="col-md-4"></div>
      <div className="col-md-4 contactopt ">
 <Link to="https://www.facebook.com/sakshi.srivastava.9022" className='nav-link' target='_blank'> <h2><i class="fa-brands fa-square-facebook"></i> <span className='text-center px-5 mx-5'>Facebook</span>  </h2></Link>

     
      </div>
      <div className="col-md-4"></div>
    </div>
    {/* 4th row end */}
      </div>
  

    </div>
  )
}

export default Contact
