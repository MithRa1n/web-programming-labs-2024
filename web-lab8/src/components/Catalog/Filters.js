import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { MoviesDisplay, movies } from './MovieList';

function Filters() {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedDurationRange, setSelectedDurationRange] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredMovies, setFilteredMovies] = useState(movies);

    const applyFilters = () => {
        const filtered = movies.filter((movie) => {
            const searchFilter = movie.title.toLowerCase().includes(searchQuery.toLowerCase());
            const categoryMatch = selectedCategory ? movie.title === selectedCategory : true;
            const durationMatch = (() => {
                if (!selectedDurationRange) return true;
                const duration = movie.duration;
                if (selectedDurationRange === '0-150') return duration >= 0 && duration <= 150;
                if (selectedDurationRange === '151-200') return duration >= 151 && duration <= 200;
                if (selectedDurationRange === '200+') return duration > 200;
                return true;
            })();
            return searchFilter && categoryMatch && durationMatch;
        });
        setFilteredMovies(filtered);
    };

    useEffect(() => {
        applyFilters();
    }, [searchQuery, selectedCategory, selectedDurationRange]);

    return (
        <>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <Form.Group controlId="categorySelect" className="me-3">
                    <Form.Control as="select" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                        <option value="">Select Category</option>
                        <option value="Inception">Inception</option>
                        <option value="The Dark Knight Rises">The Dark Knight Rises</option>
                        <option value="Good Fellas">Good Fellas</option>
                        <option value="Shutter Island">Shutter Island</option>
                        <option value="Warrior">Warrior</option>
                        <option value="Inglourious Basterds">Inglourious Basterds</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="durationRangeSelect" className="me-3">
                    <Form.Control as="select" value={selectedDurationRange} onChange={(e) => setSelectedDurationRange(e.target.value)}>
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

            <MoviesDisplay movies={filteredMovies} />
        </>
    );
}

export default Filters;
