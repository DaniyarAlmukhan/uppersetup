'use client'

import { useMovieContext } from '@/contexts/movie.context'
import React, { FC } from 'react'
import MovieCard from './movie-card.component'
import classes from './styles.module.scss'
import Skeleton from '@/components/ui/skeleton/skeleton.component'
import { Movie } from '@/types/movie'

const arr = new Array(20).fill(0)

const SkeletonLoader = () => arr.map((_, index) => (
  <div className={classes.movies__card} key={index}>
    <div className={classes.movies__card__content}>
      <div className={classes.movies__card__poster}>
        <Skeleton key={index}
          width='200px'
          height='300px'
        />
      </div>
      <div className={classes.movies__card__info}>
        <Skeleton width='200px' height='16px' />
        <Skeleton width='200px' height='16px' />
        <Skeleton width='200px' height='16px' />
        <Skeleton width='200px' height='16px' />
      </div>
    </div>
  </div>

))

interface IProps {
  initialMovies: Movie[]
}

const MovieList: FC<IProps> = ({ initialMovies }) => {
  const { moviesList, loading, totalCount, query } = useMovieContext()

  const list = query ? moviesList : initialMovies

  return (
    <>
      {!loading && list && query && <div className={classes.movies__count}>
        <span>{!!list.length ? totalCount : 'No'} movies found</span>
      </div>}
      <div className={classes.movies__grid}>
        {
          loading
            ? <SkeletonLoader /> :
            list?.map((movie, index) => (
              <MovieCard
                key={index}
                movie={movie}
              />
            ))
        }
      </div>

    </>

  )
}

export default MovieList