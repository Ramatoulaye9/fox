import {useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
import MoviesElements from "../../Components/MoviesElements/MoviesElements";
import SeriesElements from "../../Components/SeriesElements/SeriesElements";

function Home() {
  const access_token='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MDNjMDBmZjliZGZjZGQ0ZmYyZWMwM2E3MWZmNjRjYiIsInN1YiI6IjY1MWVlZTU2ZjA0ZDAxMDBmZmVkZTk0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7ey-2CHllhR2eZiZmBRSRYrP5Z91HpSo02yPHLvR5Qw'
  const [movie, setMovie] = useState([]);
  const [serie, setSerie] = useState([]);

  // &with_networks=213

  const getmovie = () => {
   axios
      .get('https://api.themoviedb.org/3/discover/movie',{
        headers: {
          Authorization: `Bearer ${access_token}`,
        },})
        .then((res) => {
          setMovie(res.data.results)
          // console.log(res.data);
        })
        .catch((error) => {
          console.error(error);
        });

  };

  const getserie = () => {
    axios
       .get('https://api.themoviedb.org/3/discover/tv',{
         headers: {
           Authorization: `Bearer ${access_token}`,
         },})
         .then((res) => {
           setSerie(res.data.results)
          //  console.log(res.data.results);
         })
         .catch((error) => {
           console.error(error);
         });
 
   };


  useEffect(() => {
    getmovie()
    getserie()
  }, []);

  return (
    <div className="home">

      <div className="movies-list">
        {movie.map((element) => (
          <MoviesElements key={element.id} element={element} />

        ))}
      </div>

      <div className="series-list">
        {serie.map((element) => (
          <SeriesElements key={element.id} element={element} />
        ))}
      </div>

    </div>
  );
}

export default Home;
