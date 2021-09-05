import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "./axios.js";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row({ title, url, isLarge }) {
  const [movies, setmovies] = useState();

  const [trailerurl, settrailerurl] = useState();

  const opts = {
    height: "400px",
    width: "100%",
    playerVars: {
      autoplay: 1
    }
  };

  const handleClick = (movie) => {
    if (trailerurl) {
      settrailerurl("");
    } else {
      movieTrailer(movie?.name || " ")
        .then((url) => {
          console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search);
          settrailerurl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  useEffect(() => {
    const fetchdata = async () => {
      const request = await axios.get(url);
      setmovies(request.data.results);
    };
    fetchdata();
  }, [url]);

  return (
    <div className="Row">
      <h2>{title}</h2>

      <div className="hello">
        {movies &&
          movies.map((movie) => (
            <img
              onClick={() => handleClick(movie)}
              className={`poster ${isLarge && "Large_poster"}`}
              key={movie.id}
              src={` https://image.tmdb.org/t/p/original${
                isLarge ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.original_name}
            />
          ))}
      </div>

      {trailerurl && <Youtube videoId={trailerurl} opts={opts} />}
    </div>
  );
}

export default Row;
