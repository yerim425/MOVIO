import { useState, useEffect } from "react";
import { getMovieListNowPlaying, getMovieGenreList } from "../api/tmdb";
import {Movie} from "../components/Movie";
import Loading from "../components/Loading";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [genres, setGenres] = useState([]);

  // 영화 장르 목록 조회
  useEffect(() => {
    const fetchGenres = async () => {
      const genreData = await getMovieGenreList();
      setGenres(genreData.genres || []);
    };
    fetchGenres();
  }, []);

  // 현재 상영 중인 영화 목록 조회
  useEffect(() => {
    setLoading(true);
    const fetchMovies = async () => {
      const movieData = await getMovieListNowPlaying(page);
      setMovies(movieData.results || []);
      setLoading(false);
    };
    fetchMovies();
  }, [page]);

  return (
    <div className="Home">
      {loading ? (
        <Loading/>
      ) : movies.length > 0 ? (
        movies.map(movie => (
          <Movie
            key={movie.id}
            movie={movie}
            genres={genres}
          />
        ))
      ):(
        <p>영화 정보가 없습니다.</p>
      )}
    </div>
  );
}

export default Home;