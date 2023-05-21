import React from "react";
import MovieItem from "../MovieItem/MovieItem";
import "./MovieList.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import { useState } from "react";

const MovieList = (props) => {
  const { listTitle, movieData } = props;
  const [trailerUrl, setTrailerUrl] = useState("");

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const onHandleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
          console.log(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };


  return (
    <div className="movie-list-container" >
      <h2>{listTitle}</h2>
      <div className="movie-list">
        {movieData &&
          movieData.map((movie) => <MovieItem key={movie.id} movie={movie} listTitle={listTitle} onHandleClick={onHandleClick} />)}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />
      }

    </div >
  );
};

export default MovieList;
