const endpoints = {
  recommended: {
    url: `/trending/all/week?api_key=${process.env.API_KEY}&language=en-US&page=500`,
    title: "recommended".toLowerCase(),
  },
  trending: {
    url: `/trending/all/week?api_key=${process.env.API_KEY}&language=en-US&page=500`,
    title: "TRENDING".toLowerCase(),
  },
  netflix_original: {
    url: `/discover/tv?api_key=${process.env.API_KEY}&with_network=213&page=500`,
    title: "NETFLIX ORIGINAL".toLowerCase(),
  },
  top_rated: {
    url: `/movie/top_rated?api_key=${process.env.API_KEY}`,
    title: "TOP RATED".toLowerCase(),
  },
  popular: {
    url: `/movie/popular?api_key=${process.env.API_KEY}`,
    title: "POPULAR".toLowerCase(),
  },
  action_movies: {
    url: `/discover/movie?api_key=${process.env.API_KEY}&with_genres=28&page=500`,
    title: "ACTION".toLowerCase(),
  },
  comedy_movies: {
    url: `/discover/movie?api_key=${process.env.API_KEY}&with_genres=35&page=500`,
    title: "COMEDY".toLowerCase(),
  },
  horror_movies: {
    title: "HORROR".toLowerCase(),
    url: `/discover/movie?api_key=${process.env.API_KEY}&with_genres=27&page=500`,
  },
  romance_movies: {
    title: "ROMANCE".toLowerCase(),
    url: `/discover/movie?api_key=${process.env.API_KEY}&with_genres=10749&page=500`,
  },
  documentaries: {
    title: "DOCUMENTARIES".toLowerCase(),
    url: `/discover/movie?api_key=${process.env.API_KEY}&with_genres=99&page=500`,
  },
  now_playing: {
    url: `/movie/now_playing?api_key=${process.env.API_KEY}`,
    title: "now playing".toLowerCase(),
  },
};
export default endpoints;
