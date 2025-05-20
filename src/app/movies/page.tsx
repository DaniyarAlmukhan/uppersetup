
import React from 'react'
import MovieList from './movie-list.component';
import classes from './styles.module.scss'
import { getMoviesListBySearch } from '@/requests/omdb.request';
import MoviePagination from './movie-pagination.component';
import Header from '@/components/layout/header.component';

export const dynamic = 'force-dynamic';

const MoviesPage = async () => {
  const res = await getMoviesListBySearch('Harry Potter');
  const initialMovies = res.data.Search ?? [];
  return (
    <>
      <Header />
      <div className={classes.movies}>

        <MovieList initialMovies={initialMovies} />
        <MoviePagination />
      </div>
    </>

  )
}

export default MoviesPage