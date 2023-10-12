import axios from 'axios'
import './Series.css'
import {useState,useEffect } from 'react'
import SeriesElements from '../../Components/SeriesElements/SeriesElements'

function Series() {
  const[series,setSeries]=useState([])
  const [page, setPage] = useState(1);
  const access_token ='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MDNjMDBmZjliZGZjZGQ0ZmYyZWMwM2E3MWZmNjRjYiIsInN1YiI6IjY1MWVlZTU2ZjA0ZDAxMDBmZmVkZTk0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7ey-2CHllhR2eZiZmBRSRYrP5Z91HpSo02yPHLvR5Qw'

  const getseries= ()=>{
    axios
    .get( `https://api.themoviedb.org/3/tv/popular?language=fr&page=${page}`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
    .then((res) => {
      setSeries(res.data.results)
      // console.log(res.data.results);
    })
    .catch((error) => {
      console.error(error);
    });
  }

  useEffect(()=>{
    getseries();
  },[page]);

  return (
    <div className='series'>
      <h1>Séries</h1>
      <div className='series-list'>
        {series.map((element)=>(
          <SeriesElements key={element.id}element={element}/>
        ))}
      </div>
      <button onClick={()=>setPage((prePage)=> prePage-1)}>Page précédente</button>
      <button onClick={()=>setPage((prePage)=> prePage+1)}>Page suivante</button>

    </div>
  )
}

export default Series;