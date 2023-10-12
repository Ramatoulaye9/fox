import "./Films.css";
import axios from "axios";
import { useState, useEffect } from "react";
import MoviesElements from "../../Components/MoviesElements/MoviesElements";

function Films() {
  const access_token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MDNjMDBmZjliZGZjZGQ0ZmYyZWMwM2E3MWZmNjRjYiIsInN1YiI6IjY1MWVlZTU2ZjA0ZDAxMDBmZmVkZTk0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7ey-2CHllhR2eZiZmBRSRYrP5Z91HpSo02yPHLvR5Qw";
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const getMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?language=fr&page=${page}`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      )
      .then((res) => {
        setMovies(res.data.results);
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getMovies();
  }, [page]);

  return (
    <div className="movies">
      <h1>Films</h1>
      <div className="movies-list">
        {movies.map((element) => (
          <MoviesElements key={element.id} element={element} />
        ))}
      </div>
      <button onClick={() => setPage((prevPage) => prevPage - 1)}>Page précedente</button>
      <button onClick={() => setPage((prevPage) => prevPage + 1)}>Page suivante</button>
    </div>
  );
}

export default Films;
