import { useParams, Link } from 'react-router-dom';
import React from 'react';
import { movies } from './MovieList';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const DetailedOverview = () => {
    const { id } = useParams();
    const movie = movies[id];

    if (!movie) {
        return <p>Error, movie not found.</p>;
    }

    return (
        <Container className="my-5">
            <Row className="justify-content-center">
                <Col md={6}>
                    <Card className="shadow-sm">
                        <Card.Img style={{ height: "600px" }} variant="top" src={movie.imageUrl} alt={movie.title} />
                        <Card.Body className="d-flex flex-column">
                            <Card.Title as="h1" className="text-center">{movie.title}</Card.Title>
                            <Card.Text className="text-center">
                                <strong>Duration:</strong> {movie.duration} minutes
                            </Card.Text>
                            <Card.Text className="text-center">
                                <strong>IMDb Rating:</strong> {movie.reviews}
                            </Card.Text>
                            <div className="mt-auto d-flex justify-content-between">
                                <Link to="/Catalog">
                                    <Button variant="outline-secondary">Go Back</Button>
                                </Link>
                                <Button variant="primary">Add To Cart</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default DetailedOverview;
