import React from "react";

import img from '../image/sakshiaboutpic.png'
function About() {
  return (
    <>
      <div className="container-fluid mt-5 pt-3 aboutbg ">
        <div className="container about  mt-5">
          <div className="row mt-5">
            <div className="col-md-6 mt-5 order-lg-1 order-2">
              <h2 className="h2 mt-4 text-black">ABOUT ME</h2>
              <p className="mt-3 ">
                Hello, My name is Sakshi Shrivastava, from Gwalior,
                Madhya Pradesh. I am currently pursuing BCA 2nd year at
                KamlaRaja Girls Post Graduate College. As a creative web
                developer, I am passionate about learning new skills to enhance
                my expertise in the field. Continuous growth and innovation
                drive me to excel in my journey as a developer.
              </p>
          
            </div>
            <div className="col-md-6 text-center mt-5 order-lg-2 order-1">
              <img src={img} alt="" className="img-fluid w-75 h-75" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
 
   
 
}

export default About;
