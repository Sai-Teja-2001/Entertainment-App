export const API_END_POINT = `${import.meta.env.VITE_BACKEND_URL}/api/v1/user`;

export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGJlZjViMDUzNWE3OGYwMjllMTQ0NDE5NTQ4MjM4MCIsInN1YiI6IjY1MDRhMjNkNTllOGE5MDExZWNhYTVjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LTBaAb_2NPRGPr2HeGszyFDP-onLh-fiL7fzmnOFZUg'
    }
  };

export const  SEARCH_MOVIE_URL="https://movielens.org/api/v1/movies?search=";
export const TMDB_IMG_URL = "https://image.tmdb.org/t/p/original";
