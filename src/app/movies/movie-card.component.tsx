import { Movie } from '@/types/movie';
import React, { FC, useState } from 'react'
import classes from './styles.module.scss';
import Image from 'next/image';
import { getMovieDetailsById } from '@/requests/omdb.request';

interface IProps {
  movie: Movie;
}

const MovieCard: FC<IProps> = ({ movie }) => {
  const [details, setDetails] = useState<{ Plot: string, imdbRating: string } | null>(null);

  const handleMouseEnter = async () => {
    if (!details) {
      getMovieDetailsById(movie.imdbID)
        .then((res) => {
          setDetails(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  };
  return (
    <div className={classes.movies__card} onMouseEnter={handleMouseEnter}>
      <div className={classes.movies__card__content}>
        <div className={classes.movies__card__poster}>
          <Image src={movie.Poster !== 'N/A' ? movie.Poster : '/poster-placeholder.svg'} alt={movie.Title} width={200} height={300} />
        </div>
        <div className={classes.movies__card__info}>
          <span>Title: {movie.Title}</span>
          <span>Year: {movie.Year}</span>
          <span>imdbId: {movie.imdbID}</span>
          <span>Type: {movie.Type}</span>
        </div>
      </div>

      {details && (
        <div className={classes.movies__card__overlay}>
          <div className={classes['movies__card__overlay-text']}>
            <span>{details.Plot?.length > 100 ? details.Plot.slice(0, 100) + '...' : details.Plot}</span>
            <span>{details.imdbRating} / 10</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default MovieCard