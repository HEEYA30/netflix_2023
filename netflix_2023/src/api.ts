const API_KEY = "192e72377dd5d502ba4cd5947f61a6c8";
const BASE_PATH = "https://api.themoviedb.org/3";


interface IMovies {
  
    id : number;
    poster_path : string;
    backdrop_path : string;
    overview : string;
    release_date : string;
    title : string;

  
}


export interface IGetMoviesResult {
  dates : {
    maximum : string;
    minimum : string;
  };
  page : number;
  results : IMovies[]; //[IMovies]라고 적어도 작동 잘 되던데?
  total_pages : number;
  total_results : number;
}


export function getMovies() { // fetcher 이름 == getMovies
  return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}