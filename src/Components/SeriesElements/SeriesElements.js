import React from "react"
import './SeriesElements.css'
import { Link } from "react-router-dom"

const SeriesElements=({element})=> {
    const poster_url = "https://image.tmdb.org/t/p/original"

  return (
    <Link to={'/series/'+element.id} className="series-details">
        <div key={element.id} className="cover">
            <img src={poster_url+element.poster_path} alt="" />
        </div>

        <div className="info">
            <p className="name">{element.name}</p>
            <p className="date">{element.first_air_date}</p>
            <p>Série</p>
        </div>
    </Link>

  )
}

export default SeriesElements