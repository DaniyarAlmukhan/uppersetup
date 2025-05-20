import { Movie, MovieDetails } from '@/types/movie.type';
import React, { FC, useState } from 'react'
import classes from './styles.module.scss';
import Image from 'next/image';
import { getMovieDetailsById } from '@/requests/omdb.request';
import { LoaderCircle } from 'lucide-react';
import MovieDetailsModal from './movie-details-modal.component';

interface IProps {
  movie: Movie;
}

export const NA = 'N/A';

const MovieCard: FC<IProps> = ({ movie }) => {
  const [details, setDetails] = useState<MovieDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isFavourite, setIsFavourite] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false; // SSR guard
    const favourites = JSON.parse(localStorage.getItem('favourites') || '[]');
    return favourites.includes(movie.imdbID);
  });

  const handleMouseEnter = async () => {
    if (!details) {
      setLoading(true);
      getMovieDetailsById(movie.imdbID)
        .then((res) => {
          setDetails(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          setLoading(false);
        })
    }
  };

  const handleFavouriteButtonClick = () => {
    const favourites = JSON.parse(localStorage.getItem('favourites') || '[]') as string[];

    if (isFavourite) {
      const updated = favourites.filter(id => id !== movie.imdbID);
      localStorage.setItem('favourites', JSON.stringify(updated));
      setIsFavourite(false);
    } else {
      const updated = [...favourites, movie.imdbID];
      localStorage.setItem('favourites', JSON.stringify(updated));
      setIsFavourite(true);
    }
  };

  return (
    <>
      <div className={classes.movies__card} onMouseEnter={handleMouseEnter}>
        <div className={classes.movies__card__content} >
          <div className={classes.movies__card__poster}>
            <Image src={movie.Poster !== NA ? movie.Poster : '/poster-placeholder.svg'} alt={movie.Title} width={200} height={300} />
          </div>
          <div className={classes.movies__card__info}>
            <span>Title: {movie.Title}</span>
            <span>Year: {movie.Year}</span>
            <span>imdbId: {movie.imdbID}</span>
            <span>Type: {movie.Type}</span>
          </div>
        </div>

        <div className={classes.movies__card__overlay}>
          {
            loading
              ? <div className={classes.movies__card__loader}>
                <LoaderCircle className={classes.spinner} />
              </div>
              : details && <>
                <div className={classes['movies__card__overlay-text']}>
                  {details.Plot !== NA && <span>{details.Plot?.length > 100 ? details.Plot.slice(0, 100) + '...' : details.Plot}</span>}
                  {details.imdbRating !== NA && <span>{details.imdbRating} / 10</span>}
                </div>
                <div className={classes['movies__card__overlay-buttons']}>
                  <button
                    onClick={handleFavouriteButtonClick}
                    className={`${isFavourite ? classes['favourite'] : ''}`}
                  >
                    {
                      isFavourite
                        ? <span>Remove from Favourites</span>
                        : <span>Add to Favourites</span>
                    }
                  </button>
                  <button className={classes['movies__card__more-info']} onClick={() => setIsOpen(true)}>More Info</button>
                </div>
              </>
          }
        </div>
      </div>

      {details && <MovieDetailsModal details={details} isOpen={isOpen} onClose={() => setIsOpen(false)} />}
    </>
  )
}

export default MovieCard