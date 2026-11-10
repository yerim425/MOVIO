import {TMDB_BASE_URL, TMDB_API_KEY, TMDB_IMG_BASE_URL, LANGUAGE, REGION} from '../constants/config';

// api 요청 및 데이터 조회
const tmdbFetch = async(endpoint) => {
   const response = await fetch(`${TMDB_BASE_URL}${endpoint}`, {
      headers: {Authorization: `Bearer ${TMDB_API_KEY}`,accept: "application/json",},
   });
   if(!response.ok){
      throw new Error(`TMDB API 오류: ${response.status}`);
   }
   return await response.json();
}

// TMDB 영화리스트(Now Playing:상영중) 검색
const getMovieListNowPlaying = async(page = 1) => {
   // https://developer.themoviedb.org/reference/search-movie

   const url = `/movie/now_playing?language=${LANGUAGE}&page=${page}&region=${REGION}`;
   return await tmdbFetch(url);
}

// 영화 상세 정보 조회
const getMovieDetail = async (id) => {
   const url = `/movie/${id}?language=${LANGUAGE}`;
   return await tmdbFetch(url);
};

// 영화 Video 검색
const getMovieVideos = async(id)=>{
   const url = `/movie/${id}/videos?language=${LANGUAGE}`;
   return await tmdbFetch(url);
}

// 영화 장르 목록 조회
const getMovieGenreList = async() => {
   const url = `/genre/movie/list?language=${LANGUAGE}`;
   return await tmdbFetch(url);
}



export {getMovieListNowPlaying, getMovieDetail, getMovieVideos, getMovieGenreList, };