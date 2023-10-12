import React from "react";
import axios from "axios";
import "./SeriesDetails.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function SeriesDetails() {
  const [seriesDetails, setSeriesDetails] = useState({});
  const poster_url = "https://image.tmdb.org/t/p/original";
  const access_token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MDNjMDBmZjliZGZjZGQ0ZmYyZWMwM2E3MWZmNjRjYiIsInN1YiI6IjY1MWVlZTU2ZjA0ZDAxMDBmZmVkZTk0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7ey-2CHllhR2eZiZmBRSRYrP5Z91HpSo02yPHLvR5Qw";
  const { id } = useParams();
  // console.log(id);

  const getSeriesdetails = () => {
    axios
      .get(`https://api.themoviedb.org/3/tv/${id}?language=fr`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then((res) => {
        setSeriesDetails(res.data);
        // console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getSeriesdetails();
  }, []);

  return (
    <div className="serie-details-page">
      <h1>Serie details</h1>
      <div className="infos">
        <div className="backdrop">
          <img alt="" src={poster_url + seriesDetails.backdrop_path} />
        </div>
        <div className="couverture">
          <img alt="" src={poster_url + seriesDetails.poster_path} />
        </div>
        <div className="details">
          <h1 className="nom"> {seriesDetails.name} </h1>
          <ul className="genre">
            {" "}
            {seriesDetails?.genres?.map((element) => (
              <li key={element.id}>{element.name}</li>
            ))}
            <p className="date">Date de sortie: {seriesDetails.first_air_date}</p>
            <p className="saisons">
              Nombre de saisons: {seriesDetails.number_of_seasons}
            </p>
            <p className="episodes">
              Nombre d'épisodes: {seriesDetails.number_of_episodes}
            </p>
          </ul>
        </div>
      </div>
      {seriesDetails.overview !== "" && (
        <div className="resume">
          <p> {seriesDetails.overview}</p>
        </div>
      )}
    </div>
  );
}

export default SeriesDetails;
