import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { fetchMovies } from '../Back-end/api';
import { Container, Row, Col, Button, Card, Spinner } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../redux/cartSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DetailedOverview = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddToCart = () => {
        dispatch(addItemToCart({ id, title: movie.title, duration: movie.duration, imageUrl: movie.imageUrl, reviews: movie.reviews }));
        toast.success(`${movie.title} has been added to the cart!`, {
            position: 'top-right',
            autoClose: 3000,
        });
        setTimeout(() => {
            navigate('/Cart');
        }, 1000);
    };

    useEffect(() => {
        const loadMovie = async () => {
            try {
                setLoading(true);
                const fetchedMovies = await fetchMovies();
                const foundMovie = fetchedMovies[id];
                if (foundMovie) {
                    setMovie(foundMovie);
                } else {
                    setError('Movie not found');
                }
            } catch (err) {
                setError('Error fetching movie');
            } finally {
                setLoading(false);
            }
        };

        loadMovie();
    }, [id]);

    if (loading) return (
        <div className="text-center mt-4">
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    );

    if (error) return <div>{error}</div>;

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
                                <Button variant="primary" onClick={handleAddToCart}>Add To Cart</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default DetailedOverview;
