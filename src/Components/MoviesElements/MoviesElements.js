import React from "react";
import "./MoviesElements.css";
import { Link } from "react-router-dom";

const MoviesElements = ({ element }) => {
  const poster_url = "https://image.tmdb.org/t/p/original";

  return (
    <Link to={"/films/" + element.id} className="movie-details">
      <div key={element.id} className="cover">
        <img alt="" src={poster_url + element.poster_path} />
      </div>

      <div className="info">
        <p className="name"> {element.original_title} </p>
        <p className="date"> {element.release_date}</p>
      </div>
    </Link>
  );
};

export default MoviesElements;
