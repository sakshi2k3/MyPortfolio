import React from 'react'
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

 
function Skills() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
    
    
    
   
    <div className="container-fluid  pt-3" id="skills" >
    <div className="container mt-5 exp">
      <div className="row skills about" >
        <h2 className="h2 mt-4 text-center thick-underlineblue">MY SKILLS</h2>
        <div className="col-md-6 mt-5 text-white ">
          {/* <p>
            As a driven web developer, I am constantly seeking opportunities
            to evolve and enhance my skill set. Proficient in HTML, CSS,
            JavaScript, Bootstrap, MongoDB, Node.js, and React.js, I am now
            eager to broaden my expertise further. Continuously staying
            updated with emerging technologies and industry trends, I
            embrace challenges and explore innovative frameworks and tools.
            With a growth mindset and a passion for delivering high-quality
            web solutions, I am dedicated to making valuable contributions
            and achieving excellence in my field.
          </p> */}
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/f7701471252497.5bbeed275b3e3.gif" alt="" />
        </div>
        <div className="col-md-6 mt-5 ">
          <h4
            className="h5 text-center  "
            style={{  fontFamily:"'Lora', serif", color:"#939393", fontWeight:"bold" }}
          >
 Tools and Technologies
          </h4>
          <div className="d-flex justify-content-around mt-3 imageicon">
            <img
              src="https://img.icons8.com/color/96/000000/html-5.png"
              alt="htmlimg"
              className="img-fluid"
            />
            <img
              src="https://img.icons8.com/color/96/000000/css3.png"
              alt="cssimg"
              className="img-fluid"
            />

            <img
              src="https://img.icons8.com/color/96/000000/javascript.png"
              alt="javascript"
              className="img-fluid"
            />
            <img
              src="https://img.icons8.com/color/96/000000/bootstrap.png"
              alt="bootstrap"
              className="img-fluid "
            />
          </div>
          <div className="d-flex justify-content-around imageicon mt-5">
            <img
              src="https://img.icons8.com/color/96/000000/nodejs.png"
              alt="nodejs"
              className="img-fluid"
            />
            <img
              src="https://simpleicons.org/icons/express.svg"
              alt=""
              className="img-fluid  "
            />
            {/* <img
              src="https://img.icons8.com/color/96/000000/mongodb.png"
              alt=""
              className="img-fluid"
            /> */}
            <img src="https://bhavya.dev/assets/icons/mongodb.svg" alt="" className="img-fluid" />
            <img
              src="https://img.icons8.com/color/96/000000/react-native.png"
              alt="" className="img-fluid"
            />
          </div>
          <div className="d-flex justify-content-around imageicon mt-5 ">
            <img
              src="https://img.icons8.com/fluent/96/000000/visual-studio-code-2019.png"
              alt=""
              className="img-fluid"
            />
            <i class="fa-brands fa-github"></i>
            <img
              src="https://leetcode.com/static/images/LeetCode_logo.png"
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* skills container fluid end */}

{/* Experience section */}

  <div className="container-fluid">
<div className="container exp mt-5 mb-5">
<h2 className="h2 mt-4 text-center thick-underlineblue">MY EXPERIENCE</h2>
  <div className="row">

<div className="col-md-12 expborder mt-5 exp" data-aos="zoom-in">
  <h2 className="h2 mt-4 "><u style={{color:'#00bcd4'}}>FREELANCING</u></h2>
  <div className="d-flex justify-content-between mt-4 internship">
  {/* <h3 className="h4 " ><i class="fa-solid fa-circle"></i>Web Designing</h3> */}
  <li className="h4" style={{color:'#939393',fontFamily:"'Lora', serif"}}>Web Development</li>
  <h3 className="h5 ">Present</h3>
  </div>
  {/* <h4 className="h6 px-4" style={{color:'#939393',fontWeight:'bold'}}>PNINFOSYS (Remote)</h4> */}
</div>
</div>
<div className="row">
    <div className="col-md-12 expborder mt-5 exp" data-aos="zoom-in">
  <h2 className="h2 mt-4 "><u style={{color:'#00bcd4'}}>INTERNSHIP</u></h2>
  <div className="d-flex justify-content-between mt-4 internship">
  {/* <h3 className="h4 " ><i class="fa-solid fa-circle"></i>Web Designing</h3> */}
  <li className="h4" style={{color:'#939393',fontFamily:"'Lora', serif"}}>Web Designing</li>
  <h3 className="h5 ">4 months</h3>
  </div>
  <h4 className="h6 px-4" style={{color:'#939393',fontWeight:'bold'}}>PNINFOSYS (Remote)</h4>
</div>
</div>
 </div>
</div>

{/* experience container fluid end */}
  </>
  )



 
}

export default Skills