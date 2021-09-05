const API_KEY="49d9deaba4d091ce4952dfe3bc5d98ef";

const request={

TRENDING:`/trending/all/day?api_key=${API_KEY}&language=en-US&page=1`,
POPULAR:`
https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
TOPRATED:`movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
NETFLIXORIGINALS:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
UPCOMING:`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
COMEDYMOVIES:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
HORROR:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
ROMANCE:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,

}
export default request;