import React from "react";
import axios from "axios";
import "./MoviesDetails.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function MoviesDetails() {
  const [movieDetails, setMovieDetails] = useState({});
  const poster_url = "https://image.tmdb.org/t/p/original";
  const access_token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MDNjMDBmZjliZGZjZGQ0ZmYyZWMwM2E3MWZmNjRjYiIsInN1YiI6IjY1MWVlZTU2ZjA0ZDAxMDBmZmVkZTk0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7ey-2CHllhR2eZiZmBRSRYrP5Z91HpSo02yPHLvR5Qw";
  const { id } = useParams();
  // console.log(id);

  const getMoviedetails = () => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?language=fr`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then((res) => {
        setMovieDetails(res.data);
        // console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getMoviedetails();
  }, []);

  return (

    <div className="movie-details-page">
      <h1>Movie details</h1>
      <div className="infos">
          <div className="backdrop"><img  alt='' src={poster_url+movieDetails.backdrop_path}/></div>
          <div className="couverture"><img  alt='' src={poster_url+movieDetails.poster_path}/></div>
          <div className="details">
            <h1 className='nom'> {movieDetails.original_title} </h1>
            <ul className='genre'> {movieDetails?.genres?.map((element)=>( 
            <li key={element.id}>
              {element.name}
            </li>))}
            </ul>
            <p className='date'>Date de sortie: {movieDetails.release_date}</p>
        </div>
      </div>
      <div className="resume">
        {/* <h1>Résumé:</h1>        */}
        <p> {movieDetails.overview}</p>
      </div>      
    </div>

  );
}

export default MoviesDetails;
