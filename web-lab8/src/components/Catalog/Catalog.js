import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Filters from './Filters';
import { MoviesDisplay, movies } from './MovieList';

const Catalog = () => {
    return (
        <Container>
            <Filters movies={movies} />
        </Container>
    );
};

export default Catalog;
