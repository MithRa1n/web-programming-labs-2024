import React from 'react';
import Tile from './Tile';

const TilesGrid = () => {
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
    ];

    return (
        <div className="container">
            <div className="row">
                {moviesData.map((movie, index) => (
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
