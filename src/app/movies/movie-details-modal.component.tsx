import React from "react";
import classes from "./styles.module.scss";
import Modal from "@/components/ui/modal/modal.component";
import { MovieDetails } from "@/types/movie.type";
import Image from "next/image";
import { getMediacriticColor } from "@/utils/helpers";
import { Clock } from "lucide-react";
import { NA } from "./movie-card.component";

interface IProps {
    details: MovieDetails;
    isOpen: boolean;
    onClose: () => void;
}

const MovieDetailsModal: React.FC<IProps> = ({ details, isOpen, onClose }) => {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
        >
            <div className={classes['movies__modal']}>
                <div className={classes['movies__modal__poster']}>
                    <Image
                        src={details.Poster !== 'N/A' ? details.Poster : '/poster-placeholder.svg'}
                        alt={details.Title}
                        width={200}
                        height={300}
                    />
                    {details.Metascore !== NA && <span
                        className={classes['movies__modal__rating']}
                        style={{
                            backgroundColor: getMediacriticColor(details.Metascore)
                        }}>
                        {details.Metascore}
                    </span>}
                </div>
                <div className={classes['movies__modal__info']}>
                    <span className={classes['movies__modal__title']}>{details.Title} ({details.Year})</span>
                    <span className={classes['movies__modal__subtitle']}>
                        {details.Genre !== NA && details.Genre.split(', ').map((genre, index) => (
                            <span key={index} className={classes['movies__modal__subtitle-item']}>{genre}</span>
                        ))}
                        {details.Rated !== NA && <span className={classes['movies__modal__subtitle-item']}>{details.Rated}</span>}
                        {details.Runtime !== NA && <span className={classes['movies__modal__subtitle-runtime']}><Clock size={14} /> {details.Runtime}</span>}
                    </span>


                    {
                        (['Actors', 'Director', 'Writer'] as (keyof MovieDetails)[]).map((key, index) => (
                            details[key] && details[key] !== NA && <div key={index} className={classes['movies__modal__info-item']}>
                                <span className={classes['movies__modal__info-key']}>
                                    {key}:
                                </span>
                                <span className={classes['movies__modal__info-value']}>
                                    {details[key] as string}
                                </span>
                            </div>
                        ))
                    }

                    {details.Plot !== NA && <div className={classes['movies__modal__storyline']}>
                        <h2>Storyline</h2>
                        <p>{details.Plot}</p>
                    </div>}

                    {details.Released !== NA && <span className={classes['movies__modal__released']}>Release Date: {details.Released}</span>}
                </div>
            </div>
        </Modal>
    );
};

export default MovieDetailsModal;