'use client';

import { useMovieContext } from '@/contexts/movie.context';
import React, { Fragment } from 'react';
import classes from './styles.module.scss';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MoviePagination = () => {
  const { totalCount, page, setPage, query } = useMovieContext();

  const totalPages = Math.ceil(totalCount / 10);

  if (!query || totalPages <= 1) return null;

  const handlePageClick = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages || page === newPage) return;
    setPage(newPage);
  };

  const getMiddlePages = () => {
    const pages: number[] = [];
    const start = Math.max(2, page - 1);
    const end = Math.min(totalPages - 4, page + 2);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  const lastFourPages = Array.from({ length: 4 }, (_, i) => totalPages - 3 + i).filter(p => p > 1);

  const allPages = Array.from(
    new Set([1, ...getMiddlePages(), ...lastFourPages])
  ).filter(p => p <= totalPages);

  allPages.sort((a, b) => a - b);

  const renderEllipsis = (prev: number, curr: number) => curr - prev > 1;

  return (
    <div className={classes.movies__pagination}>
      <ChevronLeft onClick={() => handlePageClick(page - 1)} />

      {allPages.map((p, index) => {
        const prevPage = allPages[index - 1];

        return (
          <Fragment key={p}>
            {index > 0 && renderEllipsis(prevPage, p) && (
              <span className={classes.movies__pagination__ellipsis}>
                ...
              </span>
            )}
            <button
              onClick={() => handlePageClick(p)}
              className={`${page === p ? classes.active : ''}`}
              disabled={page === p}
            >
              {p}
            </button>
          </Fragment>
        );
      })}

      <ChevronRight onClick={() => handlePageClick(page + 1)} />
    </div>
  );
};

export default MoviePagination;
