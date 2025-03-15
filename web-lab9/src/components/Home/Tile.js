import React from 'react';
import './Tile.css';

const Tile = ({ title, description, imageUrl }) => {
    return (
        <div className="col-md-4 mb-4">
            <div className="card movie-card shadow-lg border-0">
                <div className="card-img-container">
                    <img src={imageUrl} alt={title} className="card-img-top fixed-size-image" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Tile;
