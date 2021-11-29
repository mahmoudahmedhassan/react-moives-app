import { React, useEffect } from "react";
import { connect } from "react-redux";
// import { fetchMovie,loading } from "../../reducers/actions/actions";
import { Link } from "react-router-dom";
import "./moviedetailes.css";
import Spinner from "./Spinner";
import { fetchMovie, loading as loadingDispatch } from '../../reducers/actions/actions'


function Moviedetails(props) {
 
  useEffect(() => {
   props.loadingDispatch();
   props.fetchMovie(props.match.params.id);
   }, []);

  // let fetchMovie = props.fetchMovie(props.match.params.id);
  // let loadingDispatch = props.loadingDispatch();

  //  useEffect(() => {
  //   fetchMovie()
  //   loadingDispatch()
  //    }, [fetchMovie,loadingDispatch]);
    
   const moviedetailes=(
     
    <div className="body">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <div className="poster">
              <img
                src={props.movie.Poster}
                alt="poster"
                className="img-thumbnail img-poster"
                
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-8">
            <div className="detailes">
              <h1 className="moive-title">{props.movie.Title}</h1>

              <ul className="list-unstyled">
                <li>
                  <span>Genre</span> : <span>{props.movie.Genre}</span>
                </li>
                <li>
                  <span>Released</span> : <span>{props.movie.Released}</span>
                </li>
                <li>
                  <span>Rated</span> : <span>{props.movie.Rated}</span>
                </li>
                <li>
                  <span>IMDB Rating</span> :{" "}
                  <span>{props.movie.imdbRating}</span>
                </li>
                <li>
                  <span>Writer</span> : <span>{props.movie.Writer}</span>
                </li>
                <li>
                  <span>Actors</span> : <span>{props.movie.Genre}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="about">
          <h1>About</h1>
          <p>{props.movie.Plot}</p>
          <div className='about-button'>
            <a
              href={"https://www.imdb.com/title/" + props.movie.imdbID}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary view-details"
            >
              View on IMDB
            </a>

            <Link to="/" className="btn btn-primary go-home">
              go to search page
            </Link>
          </div>

        </div>
      </div>
    </div>

  )
  const content = props.loading ? <Spinner/> : moviedetailes

  return (
      <div>
      {content}
      </div>

  );
}
const mapStateToProps = (state) => ({
  movie: state.movie,
  loading: state.loading,
});
export default connect(mapStateToProps, { fetchMovie, loadingDispatch })(Moviedetails)


// export default connect(mapStateToProps, { fetchMovie,loading })(Moviedetails);
 