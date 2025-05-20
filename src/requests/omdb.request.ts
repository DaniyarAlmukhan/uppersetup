import api from './api';

const apiKey = process.env.NEXT_PUBLIC_OMDB_API_KEY as string;
const apiUrl = `http://www.omdbapi.com`;

export const getMoviesListBySearch = async (search: string, page = 1) => {
  return api.get(`${apiUrl}?s=${search}&page=${page}&apikey=${apiKey}`)
};

export const getMovieDetailsById = async (id: string) => {
  return api.get(`${apiUrl}?i=${id}&apikey=${apiKey}`)
};