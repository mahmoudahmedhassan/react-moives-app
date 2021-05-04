import React from "react";
import { connect } from "react-redux";
import CardItems from "./CardItems";

function Moviescontainer({ movies }) {
  
  return (
    <div className="container">
      <div className="row">
        {movies.Response === "True"
          ? movies.Search.map((movie, index) => (
              <CardItems movie={movie} key={index} />
            ))
          : null}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  movies: state.movies,
});

export default connect(mapStateToProps)(Moviescontainer);
 
