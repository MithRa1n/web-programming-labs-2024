import React from 'react';
import ViewMore from '../Home/ViewMore';
import { Link } from 'react-router-dom';
import './Movie.css';

const Movie = (props) => {
    const { movie = {}, index } = props;
    return (
        <div className="movie-card">
            <img src={movie.imageUrl} alt={movie.title} className="movie-poster" />
            <div className="movie-info">
                <h2>{movie.title}</h2>
                <p>Тривалість: {movie.duration} хвилин</p>
                <p className="movie-rating">Рейтинг IMDb: {movie.reviews}</p>
                <Link to={`/catalog/${index}`} style={{ marginTop: 'auto' }}>
                    <ViewMore />
                </Link>
            </div>
        </div>
    );
};

export default Movie;
