import React from 'react';
import { Container } from 'react-bootstrap';
import Filters from './Filters';
import { MoviesDisplay } from './MovieList';

const Catalog = () => {
    return (
        <Container>
            <Filters />
            <MoviesDisplay />
        </Container>
    );
};

export default Catalog;
