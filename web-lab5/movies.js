const express = require('express');
const router = express.Router();
const Movie = require('../models/movie.model'); 

router.post('/', async (req, res) => {
    try {
        const movie = await Movie.create(req.body);
        res.status(201).json(movie);
    } catch (error) {
        res.status(500).json({ message: "Помилка при створенні фільму" });
    }
});

router.get('/', async (req, res) => {
    try {
        const movies = await Movie.findAll();
        res.json(movies);
    } catch (error) {
        res.status(500).json({ message: "Помилка при отриманні фільмів" });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updated = await Movie.update(req.body, { where: { id } });
        res.json(updated);
    } catch (error) {
        res.status(500).json({ message: "Помилка при оновленні фільму" });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await Movie.destroy({ where: { id } });
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ message: "Помилка при видаленні фільму" });
    }
});

module.exports = router;
