const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Sequelize, DataTypes } = require('sequelize');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const sequelize = new Sequelize('moviesdb', 'root', 'Qwerty123', {
    host: 'localhost',
    dialect: 'mysql',
});

const Movie = sequelize.define('Movie', {
    title: { type: DataTypes.STRING, allowNull: false },
    duration: { type: DataTypes.INTEGER, allowNull: false },
    reviews: { type: DataTypes.FLOAT, allowNull: false },
    imageUrl: { type: DataTypes.STRING, allowNull: false },
}, { tableName: 'movies', timestamps: false });

sequelize.authenticate()
    .then(() => console.log('Database connected'))
    .catch(err => console.error('Error connecting to the database:', err));

app.get('/movies', async (req, res) => {
    const { category, durationRange, searchQuery } = req.query;

    try {
        const whereClause = {};

        if (category) whereClause.title = category;
        if (durationRange) {
            const [min, max] = durationRange.split('-');
            whereClause.duration = max
                ? { [Sequelize.Op.between]: [parseInt(min), parseInt(max)] }
                : { [Sequelize.Op.gte]: parseInt(min) };
        }
        if (searchQuery) {
            whereClause.title = { [Sequelize.Op.like]: `%${searchQuery}%` };
        }

        const movies = await Movie.findAll({ where: whereClause });
        res.json(movies);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch movies' });
    }
});


const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
