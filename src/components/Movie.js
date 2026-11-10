import { useNavigate } from 'react-router-dom';
import {TMDB_IMG_BASE_URL} from '../constants/config';

export const Movie = ({movie, genres}) => {
   const genreNames = movie.genre_ids
     .map(id => genres.find(genre => genre.id === id)?.name)
     .filter(Boolean)
     .join(", ");

   const navigate = useNavigate();
   const handleMovie = () => navigate(`/movie/${movie.id}`);
   return (
   <div onClick={handleMovie}>
      <h3>{movie.title}</h3>

      {movie.poster_path ? (
        <img
          src={`${TMDB_IMG_BASE_URL}${movie.poster_path}`}
          alt={movie.title}
          width="150"
        />
      ) : (
        <p>포스터 이미지 없음</p>
      )}

      <p>{movie.overview}</p>
      <p>{genreNames}</p>
   </div>
  );
}