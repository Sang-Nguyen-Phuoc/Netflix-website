
import MovieList from "../../components/MovieList/MovieList";
import { API_MOVIES_URL } from "../../utils/constant";
import useFetch from "../../hooks/useFetch/useFetch";
import "./Home.css";
import Banner from "../../components/Banner/Banner";
const Home = () => {
  const { data: popularMovies, isLoading: popularMovieLoading } = useFetch(
    API_MOVIES_URL.POPULAR
  );
  const { data: upComingMovies, isLoading: upcomingMovieLoading } = useFetch(
    API_MOVIES_URL.UPCOMING
  );
  const { data: topRatedMovies, isLoading: topRatedMovieLoading } = useFetch(
    API_MOVIES_URL.TOP_RATED
  );
  const { data: nowPlayingMovies, isLoading: nowPlayingMovieLoading } = useFetch(
    API_MOVIES_URL.NOW_PLAYING
  );
  const { data: TV_LIST_POPULAR, isLoading: TVListLoading } = useFetch(API_MOVIES_URL.TV_LIST_POPULAR);
  const { data: TV_LIST_TOP_RATED, isLoading: TVListTopRatedLoading } = useFetch(API_MOVIES_URL.TV_LIST_TOP_RATED);
  const { data: TV_LIST_ON_THE_AIR, isLoading: TVListOnTheAirLoading } = useFetch(API_MOVIES_URL.TV_LIST_ON_THE_AIR);

  const isLoading =
    popularMovieLoading || upcomingMovieLoading || topRatedMovieLoading || nowPlayingMovieLoading || TVListLoading || TVListTopRatedLoading || TVListOnTheAirLoading;

  return (
    <div className="home">
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <main>
          <Banner />
          <MovieList
            listTitle="Popular Movie"
            movieData={popularMovies.results}
          />
          <MovieList
            listTitle="Top Rated Movie"
            movieData={topRatedMovies.results}
          />
          <MovieList
            listTitle="Up Coming Movie"
            movieData={upComingMovies.results}
          />
          <MovieList
            listTitle="Now Playing Movie"
            movieData={nowPlayingMovies.results}
          />
          <MovieList
            listTitle="Popular TV Series "
            movieData={TV_LIST_POPULAR.results}
          />
          <MovieList
            listTitle="Top Rated TV Series"
            movieData={TV_LIST_TOP_RATED.results}
          />
          <MovieList
            listTitle="On The Air TV Series"
            movieData={TV_LIST_ON_THE_AIR.results}
          />

        </main>
      )
      }
    </div >
  );
};

export default Home;