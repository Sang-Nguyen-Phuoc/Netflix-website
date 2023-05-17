
import MovieList from "../../components/MovieList/MovieList";
import { API_MOVIES_URL } from "../../utils/constant";
import useFetch from "../../hooks/useFetch/useFetch";

const Home = () => {

  const { data: popularMovies, isLoading: popularMoviesLoading } = useFetch(API_MOVIES_URL.POPULAR);
  const { data: topRatedMovies, isLoading: topRatedMovieLoading } = useFetch(API_MOVIES_URL.TOP_RATED);
  const { data: upComingMovies, isLoading: upComingMoviesLoading } = useFetch(API_MOVIES_URL.UPCOMING);


  const isLoading = popularMoviesLoading || topRatedMovieLoading || upComingMoviesLoading;

  return (
    <div>Homepage, hello everyone
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <main>
          <MovieList ListTitle="Popular Movies" moviesData={popularMovies.results} />
          <MovieList ListTitle="Top Rated Movies" moviesData={topRatedMovies.results} />
          <MovieList ListTitle="Upcoming Movies" moviesData={upComingMovies.results} />
        </main>
      )}
    </div>
  )
}

export default Home