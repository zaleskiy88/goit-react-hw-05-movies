import axios from 'axios';
import { toast } from 'react-hot-toast';

const KEY = '842344de8347536aefc6f17e8e76d4bd';

const movieDb = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: { api_key: KEY },
});

export const getTrending = async () => {
  try {
    const res = await movieDb.get('/trending/movie/day');
    const results = await res.data.results;

    return results;
  } catch (error) {
    console.log('error :>> ', error);
  }
};

export const getMovieByName = async searchQuery => {
  try {
    const res = await movieDb.get(`/search/movie?query=${searchQuery}`);
    const results = await res.data.results;

    if (results.length === 0) {
      toast('There is no movies on your query');
    }

    return results;
  } catch (error) {
    console.log('Error :>> ', error);
  }
};

export const getMovieById = async movieId => {
  try {
    const res = await movieDb.get(`/movie/${movieId}`);
    const results = await res.data;
    return results;
  } catch (error) {
    console.log('Error :>> ', error);
  }
};

export const getActors = async movieId => {
  try {
    const res = await movieDb.get(`/movie/${movieId}/credits`);
    const results = await res.data.cast;
    return results;
  } catch (error) {
    console.log('Error', error);
  }
};

export const getReviews = async movieId => {
  try {
    const res = await movieDb.get(`/movie/${movieId}/reviews`);
    const results = await res.data.results;
    return results;
  } catch (error) {
    console.log('Error :>> ', error);
  }
};
