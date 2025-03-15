import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const fetchMovies = async (filters = {}) => {
    try {
        const params = new URLSearchParams(filters).toString();
        const response = await API.get(`/movies?${params}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching movies:', error);
        throw error;
    }
};
