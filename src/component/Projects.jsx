import React from 'react';
import ProCard from './ProCard';
import ProjectApi from './ProjectApi'

function Projects() {
  return (
    <>
    <div className='mt-5 pt-5  text-center'>
    <h1 className='display-6 thick-underlineblue' style={{color:"#00bcc8", fontFamily:" 'Poppins', sans-serif"}}>MY PROJECTS</h1>

    </div>
      
       {/* <ProCard/> */}
    <div className="container-fluid mt-5 mb-5">
      <div className="container">
        <div className="row">
        <div className="col-12 mx-auto">
          <div className="row  gy-4 ">
          {
            ProjectApi.map((val,idx)=>{
              return <ProCard key={idx} image={val.image} project_name = {val.proj_name}   Description = {val.description} demolink = {val.demolink} source = {val.source}  />
            })
          }
          </div>
        </div>
        </div>
      </div>
    </div>


    </>
  );
}

export default Projects;
