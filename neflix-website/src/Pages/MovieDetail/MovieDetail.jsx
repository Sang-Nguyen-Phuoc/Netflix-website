import React from "react";
import { useParams } from "react-router-dom";
import useFetch from '../../hooks/useFetch/useFetch';
import { PREFIX_IMAGE } from '../../utils/constant';
import "./MovieDetail.css";
import Header from "../../layouts/Header/Header";
import { BASE_API_URL, API_KEY } from '../../utils/constant';
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
import { useState } from "react";
const MovieDetail = () => {
    const params = useParams();
    const { movieId } = params;
    const movieDetailAPIUrl = `${BASE_API_URL}/movie/${movieId}?api_key=${API_KEY}`;
    const { data: movieDetail, isLoading } = useFetch(movieDetailAPIUrl, {});
    const { title, backdrop_path, release_date, vote_average, genres, overview, tagline } = movieDetail;
    console.log(movieDetail);
    const [trailerUrl, setTrailerUrl] = useState("");
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    const getTrailerUrl = (movie) => {
        movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get("v"));
                console.log(urlParams.get("v"));
            })
            .catch((error) => console.log(error));
    };


    if (isLoading) {
        return "Loading...";
    }

    return (
        <div className="container">
            <div><Header /></div>
            <div className="movie-img">
                <img src={`${PREFIX_IMAGE}${backdrop_path}`} alt="title" />
            </div>
            <div className="movie-info">
                <h4>{title}</h4>
                <p>{overview}</p>
            </div>
            {/* <div>{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} /> && getTrailerUrl={movieDetail}} </div> */}
        </div>
    );
};

export default MovieDetail;
