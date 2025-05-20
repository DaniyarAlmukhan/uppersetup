
import React from 'react'
import MovieList from './movie-list.component';
import classes from './styles.module.scss'
import { getMoviesListBySearch } from '@/requests/omdb.request';
import MoviePagination from './movie-pagination.component';
import Header from '@/components/layout/header.component';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Search for movies and TV shows',
  description: 'Browse and add movies to your favorites',
};

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