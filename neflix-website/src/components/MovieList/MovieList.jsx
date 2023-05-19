import React from "react";
import MovieItem from "../MovieItem/MovieItem";
import "./MovieList.css";


const MovieList = (props) => {
  const { listTitle, movieData } = props;
  return (
    <div className="movie-list-container">
      <h2>{listTitle}</h2>
      <div className="movie-list">
        {movieData &&
          movieData.map((movie) => <MovieItem key={movie.id} movie={movie} listTitle={listTitle} />)}
      </div>
    </div>
  );
};

export default MovieList;
