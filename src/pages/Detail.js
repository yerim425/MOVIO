import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetail } from "../api/tmdb";
import Loading from "../components/Loading";
import { TMDB_IMG_BASE_URL } from "../constants/config";

function Detail() {
   const {id} = useParams();
   const [loading, setLoading] = useState(true);
   const [movie, setMovie] = useState();
   useEffect(()=>{
      setLoading(true);
      const fetchMovieDetail = async() => {
         const detailData = await getMovieDetail(id);
         setMovie(detailData);
         console.log(detailData);
         setLoading(false);
      }
      fetchMovieDetail();
   }, [])
   return (
      <div className="Detail">
         {
            movie ? (
               <div>
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
                  <p>{movie.genres.map(genre=>genre.name).join(', ')}</p>
               </div>
            ):null
         }
         {loading?<Loading/>:null}
      </div>
   )
}

export default Detail;