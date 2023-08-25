import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import resume from './SakshiResume.pdf'
import resume from './Sakshi novoresume.pdf'


// import {Resume} from '../SakshiResume.pdf'

import AOS from "aos";
import "aos/dist/aos.css";
function Home() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
   
      <div className="container-fluid banner pt-3 mt-5" id="home">
        <h1
          className="text-white text-center py-3 mobhead1 display-3"
          data-aos="fade-right"
          style={{ marginTop: "80px" }}
        >
          HI! <span style={{ color: "#00bcc8" }}>I'M SAKSHI</span>
        </h1>
        <h1 className=" text-center display-3" style={{ color: "#6be1c8" }}>
          CREATIVE AND PASSIONATE
        </h1>
        <h1 className="text-white text-center display-3" style={{}}>
          WEB <span style={{ color: "#00bcc8" }}>DEVELOPER</span>
        </h1>
        <p className="text-white px-5 mt-5 bannerpara">
          As a dedicated and enthusiastic web developer, I wholeheartedly
          believe in the power of continuous learning and the value it brings to
          my craft. With an unwavering enthusiasm for web development, I am
          always ready to take on new challenges that push me beyond my comfort
          zone.
        </p>
     

        <div className="text-center mt-5">
          <Link to={resume} className="btn bannerbtn mb-5" download='Sakshi Resume' target="_blank" rel="noopener noreferrer" >
            <span className="text-center">Resume </span>
            {/* <i className="fas fa-paper-plane text-white ml-2"></i> */}
            <i class="fa-sharp fa-solid fa-circle-down ml-2"></i>
          </Link>
        </div>
      </div>
     

      {/* banner container fluid end */}
     {/* About Section */}

 

        {/* my skills */}
   

     {/* experience */}
  

 {/* connect with me */}
 {/* <div className="container-fluid blueback mt-5">
 <div className="container about mt-4 ">
 <h2 className="h2 mt-4 text-center thick-underline text-white pt-4 ">Let's Connect</h2> 
  <div className="row mt-5 footer pb-4">
    <div className="col-md-12  d-flex justify-content-around">
     <Link to='https://www.linkedin.com/in/sakshi-shrivastava-a67b2924b/' target="_blank"><i class="fa-brands fa-linkedin"></i></Link> 
     <Link to='https://www.linkedin.com/in/sakshi-shrivastava-a67b2924b/' target="_blank"><i class="fa-solid fa-envelope"></i></Link> 
     <Link to='https://www.linkedin.com/in/sakshi-shrivastava-a67b2924b/' target="_blank"> <i class="fa-brands fa-facebook"></i></Link> 
     <Link to='https://www.linkedin.com/in/sakshi-shrivastava-a67b2924b/' target="_blank"><i class="fa-brands fa-github"></i> </Link> 
    
    </div>

  </div>
 </div>
 </div>
 </div> */}

    </>
  );
}

export default Home;
