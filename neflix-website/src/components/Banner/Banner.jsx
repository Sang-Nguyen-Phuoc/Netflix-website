import './Banner.css';
import { useState, useEffect } from 'react';
import { API_MOVIES_URL } from '../../utils/constant';
import useFetch from '../../hooks/useFetch/useFetch';
import { FontAwesomeIcon } from 'react-icons/fa';
const Banner = () => {
    const [movie, setMovie] = useState([]);
    const { data: topRatedMovies } = useFetch(API_MOVIES_URL.TOP_RATED);

    useEffect(() => {
        if (topRatedMovies.results) {
            const randomIndex = Math.floor(Math.random() * topRatedMovies.results.length - 1);
            const randomMovie = topRatedMovies.results[randomIndex];
            setMovie(randomMovie);
        }
    }, [topRatedMovies]);

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    };

    return (

        <header
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center ",
            }}
        >
            <section className="banner__contents">
                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button">
                        <FontAwesomeIcon icon="fa-sharp fa-solid fa-play" />
                        <span>Play</span>
                    </button>
                    <button className="banner__button">
                        <FontAwesomeIcon icon="fa-thin fa-circle-info" />
                        <span>Info</span>
                    </button>
                </div>
                <h1 className="banner__description">
                    {truncate(movie?.overview, 150)}
                </h1>
            </section>

            <div className="banner--fadeBottom" />
        </header>

    );
};

export default Banner;
