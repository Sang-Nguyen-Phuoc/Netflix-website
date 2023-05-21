import React from "react";
import { PREFIX_IMAGE } from "../../utils/constant";
import { Link } from "react-router-dom";
import "./MovieItem.css";
import { BsPlayFill } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";



const MovieItem = (props) => {
  const { movie, listTitle, onHandleClick } = props;
  const { title, backdrop_path, poster_path, id, vote_average } = movie;
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div className="movie">
      <div className={`movie-item ${(listTitle === "Popular Movie") && `movie-item-poster`}`}>
        <img onClick={() => onHandleClick(movie)} src={`${PREFIX_IMAGE}${listTitle === "Popular Movie" ? poster_path : backdrop_path}`} alt={title} />
      </div >
      <div className="movie__desc">
        <div className="movie-item-overview">
          <h3 className="movie-item-title"> {title} </h3>
          <span className="vote_average">{vote_average}</span>
          <span className="icon-play"><BsPlayFill /></span>
          <span className="icon-info"><AiOutlineInfoCircle /></span>
          <p>{truncate(movie?.overview, 100)}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
