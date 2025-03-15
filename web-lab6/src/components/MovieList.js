import Movie from './Movie/Movie';

const MovieList = () => {
    const movies = [
        {
            title: 'Inception',
            duration: 148,
            reviews: 8.8,
            imageUrl: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg'
        },
        {
            title: 'The Dark Knight Rises',
            duration: 164,
            reviews: 8.4,
            imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_FMjpg_UX1000_.jpg'
        },
        {
            title: 'Good Fellas',
            duration: 209,
            reviews: 7.8,
            imageUrl: 'https://prod-printler-front-as.azurewebsites.net/media/photo/181623.jpg?mode=crop&width=425&height=600&rnd=0.0.1'
        },
        {
            title: 'Shutter Island',
            duration: 138,
            reviews: 8.2,
            imageUrl: 'https://m.media-amazon.com/images/M/MV5BN2FjNWExYzEtY2YzOC00YjNlLTllMTQtNmIwM2Q1YzBhOWM1XkEyXkFqcGc@._V1_.jpg'
        },
        {
            title: 'Warrior',
            duration: 140,
            reviews: 8.2,
            imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTk4ODk5MTMyNV5BMl5BanBnXkFtZTcwMDMyNTg0Ng@@._V1_FMjpg_UX1000_.jpg'
        },
    ];

    return (
        <div className="movie-list">
            {movies.map((movie, index) => (
                <Movie key={index} {...movie} />
            ))}
        </div>
    );
};

export default MovieList;
