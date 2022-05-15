import axios from 'axios';
import Account from '../entities/Accounts';


export default {
  getMovieReviews: async (movieId) => {
    console.log("invoke movieReview by id from TMDB via custom design API")
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${process.env.TMDB_KEY}`
    );
    return response.data;
  },
  getMovie: async (movieId) => {
    console.log("invoke movie by id from TMDB via custom design API")
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.TMDB_KEY}`
    );
    return response.data;
  },
  find: async (query) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false&${query}`
    );
    return response.data;
  },

  updateAccount: async (id, firstName, lastName, email, password, { accountsRepository }) => {
    const account = new Account(undefined, firstName, lastName, email, password);
    return accountsRepository.merge(account);
  },

  findUpcoming: async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false`
    );
    return response.data;
  },

  getMovieSimilar: async (movieId) => {
    console.log("invoke similar movie as similar to another movide id from TMDB via custom design API")
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${process.env.TMDB_KEY}`
    );
    return response.data;
  },

  getTopRatedMovies: async (query) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false&${query}`
    );
    return response.data;
  },


};