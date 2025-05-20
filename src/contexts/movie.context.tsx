'use client';

import { useDebounce } from "@/hooks/useDebounce.hook";
import { getMoviesListBySearch } from "@/requests/omdb.request";
import { Movie } from "@/types/movie.type";
import { createContext, useContext, useEffect, useState } from "react";

type MovieContextType = {
  query: string;
  setQuery: (query: string) => void;
  moviesList: Movie[];
  loading: boolean;
  totalCount: number;
  page: number;
  setPage: (page: number) => void;
}

const MovieContext = createContext<MovieContextType | undefined>(undefined);

export const MovieProvider = ({ children }: { children: React.ReactNode }) => {
  const [query, setQuery] = useState<string>('');
  const [moviesList, setMoviesList] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [page, setPage] = useState<number>(1);

  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);

      setLoading(true);
      getMoviesListBySearch(debouncedQuery, page)
        .then((response) => {
          if (!response.data.Search) {
            setMoviesList([]);
          } else {
            console.log(response.data.Search);
            setMoviesList(response.data.Search);
            setTotalCount(Number(response.data.totalResults));
          }
        })
        .catch(() => {
          setMoviesList([]);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    if (debouncedQuery) getMovies();
  }, [debouncedQuery, page]);

  return (
    <MovieContext.Provider value={{ query, setQuery, moviesList, loading, totalCount, page, setPage }}>
      {children}
    </MovieContext.Provider>
  );

}

export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error('Movie context error');
  }
  return context;
};

