import React from "react";
import { Link } from "react-router-dom";


function ProCard(props) {
  return (
    <>
    <div className="card mx-3 mt-5  shadow border-light" style={{width: "25rem"}}>
      <div className="text-center">
      <img src={props.image} alt="" className="img-fluid w-100 h-100"  />
      </div>

  <div class="card-body projbody">
    <h5 class="card-title text-center">{props.project_name}</h5>
    <p class="card-text">{props.Description}</p>
    <div className="d-flex justify-content-around projcardbtn">
                    <Link to={props.demolink} className="btn btn-info" target="_blank">
                      <i class="fa-regular fa-eye"></i> Live Demo 
                    </Link>
                    <Link to={props.source} className="btn btngrey" target="_blank">
                      <i class="fa-brands fa-github"></i> Source Code
                    </Link>
                  </div>
  </div>
</div>



     
     
    </>
  );
}

export default ProCard;
