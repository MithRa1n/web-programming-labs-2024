import './Movie.css';

const Movie = ({ title, duration, reviews, imageUrl }) => {
    return (
        <div className="movie-card">
            <img src={imageUrl} alt={title} className="movie-poster" />
            <div className="movie-info">
                <h2>{title}</h2>
                <p>Тривалість: {duration} хвилин</p>
                <p className="movie-rating">Рейтинг IMDb: {reviews}</p>
            </div>
        </div>
    );
};

export default Movie;
