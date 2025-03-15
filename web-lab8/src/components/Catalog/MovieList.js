import Movie from './Movie';
export const movies = [
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

    {
        title: 'Inglourious Basterds',
        duration: 153,
        reviews: 8.4,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlKMe-0o3Cmnq15prx1UMy1ucjA31qnsanntQNl9-mve9AMaHL8jq9fcIT2pLGDQFLvCm8'
    },

];

export const MoviesDisplay = ({ movies = [] }) => {
    return (
        <div className="container">
            <div className="row">
                {movies.map((movie, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <Movie movie={movie} index={index} />
                    </div>
                ))}
            </div>
        </div>
    );
};
