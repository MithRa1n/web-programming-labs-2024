import React, { useState, useEffect } from 'react';
import { Form, Spinner } from 'react-bootstrap';
import { fetchMovies } from '../Back-end/api';
import { MoviesDisplay } from './MovieList';

function Filters() {
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedDurationRange, setSelectedDurationRange] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const loadFilteredMovies = async () => {
        try {
            setIsLoading(true);
            const filters = {
                category: selectedCategory,
                durationRange: selectedDurationRange,
                searchQuery,
            };
            const data = await fetchMovies(filters);
            setFilteredMovies(data);
        } catch (error) {
            console.error('Error loading movies:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        loadFilteredMovies();
    }, [selectedCategory, selectedDurationRange, searchQuery]);

    return (
        <>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <Form.Group controlId="categorySelect" className="me-3">
                    <Form.Control
                        as="select"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option value="">Select Category</option>
                        {filteredMovies.map((movie) => (
                            <option key={movie.id} value={movie.title}>
                                {movie.title}
                            </option>
                        ))}
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="durationRangeSelect" className="me-3">
                    <Form.Control
                        as="select"
                        value={selectedDurationRange}
                        onChange={(e) => setSelectedDurationRange(e.target.value)}
                    >
                        <option value="">Select Duration Range</option>
                        <option value="0-150">0 - 150 min</option>
                        <option value="151-200">151 - 200 min</option>
                        <option value="200+">200+ min</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="searchInput">
                    <Form.Control
                        type="text"
                        placeholder="Search for a movie..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </Form.Group>
            </div>

            {isLoading ? (
                <div className="text-center mt-4">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            ) : (
                <MoviesDisplay movies={filteredMovies} />
            )}
        </>
    );
}

export default Filters;
