const endpoints = {
  recommended: {
    url: `/trending/all/week?api_key=${process.env.API_KEY}&language=en-US&page=500`,
    title: "recommended".toLowerCase(),
  },
  trending: {
    url: `/trending/all/week?api_key=${process.env.API_KEY}&language=en-US&page=500`,
    title: "TRENDING".toLowerCase(),
  },
  netflixOriginal: {
    url: `/discover/tv?api_key=${process.env.API_KEY}&with_network=213&page=500`,
    title: "NETFLIX ORIGINAL".toLowerCase(),
  },
  topRated: {
    url: `/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=500`,
    title: "TOP RATED".toLowerCase(),
  },
  actionMovies: {
    url: `/discover/movie?api_key=${process.env.API_KEY}&with_genres=28&page=500`,
    title: "ACTION".toLowerCase(),
  },
  comedyMovies: {
    url: `/discover/movie?api_key=${process.env.API_KEY}&with_genres=35&page=500`,
    title: "COMEDY".toLowerCase(),
  },
  horrorMovies: {
    title: "HORROR".toLowerCase(),
    url: `/discover/movie?api_key=${process.env.API_KEY}&with_genres=27&page=500`,
  },
  romanceMovies: {
    title: "ROMANCE".toLowerCase(),
    url: `/discover/movie?api_key=${process.env.API_KEY}&with_genres=10749&page=500`,
  },
  documentaries: {
    title: "DOCUMENTARIES".toLowerCase(),
    url: `/discover/movie?api_key=${process.env.API_KEY}&with_genres=99&page=500`,
  },
};
export default endpoints;
