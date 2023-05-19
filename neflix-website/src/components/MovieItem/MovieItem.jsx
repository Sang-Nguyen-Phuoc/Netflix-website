import React from "react";
import { PREFIX_IMAGE } from "../../utils/constant";
import { Link } from "react-router-dom";
import "./MovieItem.css";


const MovieItem = (props) => {
  const { movie, listTitle } = props;
  const { title, backdrop_path, poster_path, id } = movie;
  return (
    <div className={`movie-item ${(listTitle === "Popular Movie") && `movie-item-poster`}`}>
      <Link to={`/movies/${id}`}>
        <img src={`${PREFIX_IMAGE}${listTitle === "Popular Movie" ? poster_path : backdrop_path}`} alt={title} />
      </Link>
    </div >
  );
};

export default MovieItem;
