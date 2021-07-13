import React from "react";
import { Link } from "react-router-dom";

function CardItems({ movie }) {
  return (

            <div className='col-sm-12 col-md-6 col-lg-3' style={{marginBottom:'30px'}}>
              <div className="card card-body bg-dark text-center h-100">
              <img
                className="w-100 mb-2"
                src={movie.Poster}
                alt="Movie Cover"
              />
              <h5 className="text-light card-title">
                {movie.Title} - {movie.Year}
              </h5>
                 <Link className='btn btn-primary' to ={'/Moviedetails/'+ movie.imdbID}> card movie</Link>
             </div>
        </div>
    
  )
}

export default CardItems;
