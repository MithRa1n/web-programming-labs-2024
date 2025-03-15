import React from 'react';
import Tile from './Tile';

const TilesGrid = ({ displayLimit }) => {
    const moviesData = [
        {
            title: 'Inception',
            description: 'A mind-bending thriller by Christopher Nolan about dream manipulation.',
            imageUrl: 'https://play-lh.googleusercontent.com/TGaTckK5V7VKlJ34PFlON5ei_DARWndAHrDqOWTaC6kH5R8V8RlxE6i22VswAx3ENx-3',
        },
        {
            title: 'The Matrix',
            description: 'A science fiction classic exploring simulated reality and the fight for freedom.',
            imageUrl: 'https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg',
        },
        {
            title: 'Interstellar',
            description: 'An epic journey through space and time to save humanity, directed by Christopher Nolan.',
            imageUrl: 'https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SL1500_.jpg',
        },

        {
            title: 'Avatar',
            description: 'An epic science fiction adventure on the alien planet of Pandora, directed by James Cameron.',
            imageUrl: 'https://m.media-amazon.com/images/I/61OUGpUfAyL._AC_SL1024_.jpg',
        },
        {
            title: 'The Dark Knight',
            description: 'A superhero crime thriller by Christopher Nolan featuring Batman’s fight against the Joker.',
            imageUrl: 'https://m.media-amazon.com/images/I/A1exRxgHRRL._AC_UF894,1000_QL80_.jpg',
        },
        {
            title: 'Gladiator',
            description: 'An epic historical drama about a betrayed Roman general who seeks revenge, directed by Ridley Scott.',
            imageUrl: 'https://m.media-amazon.com/images/I/71uHO83rh4L._AC_UF894,1000_QL80_.jpg',
        },
        {
            title: 'Forrest Gump',
            description: 'A heartwarming story of a man’s extraordinary life journey, directed by Robert Zemeckis.',
            imageUrl: 'https://m.media-amazon.com/images/I/61++qxPiVuL._AC_UF894,1000_QL80_.jpg',
        },
        {
            title: 'The Shawshank Redemption',
            description: 'A moving tale of hope and friendship set in a prison, based on Stephen King’s novella.',
            imageUrl: 'https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg',
        },
        {
            title: 'Pulp Fiction',
            description: 'A darkly humorous crime film by Quentin Tarantino, interweaving multiple stories.',
            imageUrl: 'https://m.media-amazon.com/images/I/71c05lTE03L._AC_SY679_.jpg',
        }


    ];

    const visibleItems = moviesData.slice(0, displayLimit);

    return (
        <div className="container">
            <div className="row">
                {visibleItems.map((movie, index) => (
                    <Tile
                        key={index}
                        title={movie.title}
                        description={movie.description}
                        imageUrl={movie.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
};

export default TilesGrid;
