import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Filters from './Filters';
import MovieList from './MovieList';

const Catalog = () => {
    return (
        <Container>
            <Row className="my-4">
                <Col xs={9} className="d-flex gap-3">
                    <Filters />
                    <Filters />
                    <Filters />
                </Col>
                <Col xs={3} className="d-flex justify-content-end">
                    <Button variant="danger">Apply</Button>
                </Col>
            </Row>

            <MovieList />
        </Container>
    );
};

export default Catalog;
