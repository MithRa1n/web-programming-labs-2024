import Movie from './Movie';
export const movies = [];

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
