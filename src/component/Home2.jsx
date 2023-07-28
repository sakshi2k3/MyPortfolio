import React from 'react'
import { Link } from 'react-router-dom'
// import resume from './SakshiResume.pdf'
function Home2() {
  return (
   <>
   
      <div className="container-fluid banner mt-5 pt-5" >
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
        {/* <Link to={Resume}  download="Example-PDF-document"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-item ms-auto">
                   </Link> */}

        <div className="text-center mt-5">
          <Link  className="btn bannerbtn mb-3" download='Sakshi Resume' target="_blank" rel="noopener noreferrer" >
            <span className="text-center">Resume </span>
            {/* <i className="fas fa-paper-plane text-white ml-2"></i> */}
            <i class="fa-sharp fa-solid fa-circle-down ml-2"></i>
          </Link>
        </div>
      </div>

      {/* banner container fluid end */}
   </>
  )
}

export default Home2